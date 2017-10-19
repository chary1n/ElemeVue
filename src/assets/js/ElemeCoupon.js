'use strict';
let URL = require('url');
let queryString  = require("querystring");
let Axios = require('axios')
const HONGBAO_URL = "https://restapi.ele.me/marketing/promotion/weixin/"
const ElemeCoupon = function (coupon_url, detect_account, main_account) {
  detect_account = {
    key: "a4bdb21f7be1d2bb3422487186e414a0",
    open_id: "B85DFA148B59B640AAAF59B8BDD3B26C",
  }

}
const detect_hongbao = function (detect_account, main_account, url_query) {
  get_eleme_hongbao_info(detect_account, vals, url_query).then(function (res) {
    console.log(res)
  }).catch(function (err) {
    console.log(err);
  })
}
const get_eleme_hongbao_info = function (detect_account, params, url_query) {
  let new_header = {
    "X-Shard": "eosid="+ parseInt(url_query.sn, 16).toString(),
  }
  let vals = prepare_coupon_vals(url_query, detect_account);
  return new Promise(function (resolve, reject) {
    Axios.post(HONGBAO_URL + detect_account.open_id, params, {
      headers: new_header
    }).then(function (res) {
      if(res.data){
        if (res.data.get("name") == "TOO_BUSY"){
          resolve("TOO_BUSY");
        }
        else if(res.data.ret_code == 1){
          resolve("DONE", res.data);
        }
        else if(res.data.ret_code == 5){
          resolve("TOO MUCH", res.data);
        }
        else {
          resolve("DONE", res.data);
        }
      }
      else {
        reject(res);
      }
    }).catch(function (err) {
      reject(err);
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
  console.log(url);
  return url.query
}

let e = ElemeCoupon("https://h5.ele.me/hongbao#hardware_id=&is_lucky_group=True&lucky_number=7&track_id=&platform=4&sn=10d3f051168c68de&theme_id=1489&device_id=")
console.log(e)

