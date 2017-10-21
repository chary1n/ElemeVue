'use strict';
let URL = require('url');
let queryString  = require("querystring");
let Axios = require('axios')
const HONGBAO_URL = "https://restapi.ele.me/marketing/promotion/weixin/"
const break_time = 1000 //ms
var IS_CONTINUE = true;
Axios.defaults.headers.post['Content-Type'] = 'application/json';
const ElemeCoupon = function (coupon_url, detect_account, main_account) {
  detect_account = {
    key: "a4bdb21f7be1d2bb3422487186e414a0",
    open_id: "B85DFA148B59B640AAAF59B8BDD3B26C",
  }
  var url_query = parse_coupon_url(coupon_url)
  detect_hongbao(detect_account, {}, url_query);
}
const detect_hongbao = function (detect_account, main_account, url_query) {
  let lucky_number = url_query.lucky_number;//最大红包书数
  let is_next_lucky = false; //是否下一次是最大红包
  // while (!is_next_lucky){

  const get_lucky_hongbao = function (is_main) {
      let account = null;
      if(is_main){
        account = main_account;
      }else {
        account = detect_account;
      }
      if(!IS_CONTINUE){
        console.log("停止");
        return;
      }
    get_eleme_hongbao_info(detect_account, url_query).then(function (res) {
      if(res.code == 'DONE'){
        let coupon_detail = res.data;
        let cur_number = coupon_detail.promotion_records.length;
        if(cur_number >= parseInt(lucky_number)){
          let log_msg = '最大红包已经被领走了';
          console.log(log_msg)
          setTimeout(function () {
            get_lucky_hongbao(false);
          }, break_time);
        }else if(cur_number == lucky_number - 1){
          get_lucky_hongbao(true);
        }
      }else if(res.code == 'BUSY'){
        //too busy
        let log_msg = "查询太频繁啦...";
        console.log(log_msg)
        setTimeout(function () {
          get_lucky_hongbao(false);
        }, break_time);
      }else if(res.code == 'TOO_MUCH'){
        let log_msg = '领太多了...';
        console.log(log_msg)
        let data = res.data;
        setTimeout(function () {
          get_lucky_hongbao(false);
        }, break_time);
      }
    }).catch(function (err) {
      console.log(err);
    })
  }
  // }
  get_lucky_hongbao(false);

}

const get_eleme_hongbao_info = function (detect_account, url_query) {
  let new_header = {
    "X-Shard": "eosid="+ parseInt(url_query.sn, 16).toString(),
    "Origin": "restapi.ele.me"
  }
  let vals = prepare_coupon_vals(url_query, detect_account);
  return new Promise(function (resolve, reject) {
    Axios.post(HONGBAO_URL + detect_account.open_id, vals, {
      headers: new_header
    }).then(function (res) {
      if(res.data){
        if (res.data.name == "TOO_BUSY"){
          resolve({
            code:"BUSY",
          });
        }
        else if(res.data.ret_code == 1){
          resolve({
            code:"DONE",
            data:res.data
          });
        }
        else if(res.data.ret_code == 5){
          resolve({
            code:"TOO_MUCH",
            data:res.data
          });
        }
        else {
          resolve({
            code:"DONE",
            data:res.data
          });
        }
      }
      else {
        reject(res);
      }
    }).catch(function (err) {
      if(err && err.response && err.response.status == 400 && err.response.data.name == 'TOO_BUSY'){
        resolve({
          code:"BUSY",
        });
      }
      else {
        reject(err);
      }
    })
  })

}
const prepare_coupon_vals = function(url_query, account)
{
  if(account) {
    return {
      "method": "phone",
      "group_sn": url_query.sn,
      "sign": account.key,
      "phone": account.phone,
      "device_id": url_query.device_id,
      "hardware_id": url_query.hardware_id,
      "platform": url_query.platform,
      "track_id": url_query.track_id,
      "weixin_avatar": account.figureurl_qq_1,
      "weixin_username": account.nickname,
      "unionid": "fuck"
    }
  }
}
const parse_coupon_url = function(coupon_url)
{
  coupon_url = coupon_url.replace("#", "?")
  let url = new URL.parse(coupon_url,queryString);
  return url.query
}

let e = ElemeCoupon("https://h5.ele.me/hongbao#hardware_id=&is_lucky_group=True&lucky_number=7&track_id=&platform=4&sn=10d3f051168c68de&theme_id=1489&device_id=")
// setTimeout(function () {
//   IS_CONTINUE = false;
// },10000);
// console.log(e)
// export {
//   ElemeCoupon,
//   IS_CONTINUE,
// }

