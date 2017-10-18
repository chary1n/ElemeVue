'use strict';
var URL = require('url');
var queryString  = require("querystring");
const ElemeCoupon = function (coupon_url, detect_account, main_account) {
  var url_query = parse_coupon_url(coupon_url)
  let sn = url_query.sn;
  let lucky_number = url_query.lucky_number;
  let platform = url_query.platform;
  let theme_id = url_query.theme_id;

}
const prepare_coupon_vals = funuction()
{
  return{
    "method": "phone",
    "group_sn": sn,
    "sign": key,
    "phone": account_list[self.cur_number].phone,
    "device_id": "",
    "hardware_id": "",
    "platform": 0,
    "track_id": "undefined",
    "weixin_avatar":'',
    "weixin_username":'',
    "unionid": "fuck"

  }
}
const parse_coupon_url= function(coupon_url)
{
  coupon_url = coupon_url.replace("#", "?")
  var url = new URL.parse(coupon_url,queryString);
  console.log(url);
  return url.query
}

var e = ElemeCoupon("https://h5.ele.me/hongbao#hardware_id=&is_lucky_group=True&lucky_number=7&track_id=&platform=4&sn=10d3f051168c68de&theme_id=1489&device_id=")
console.log(e)

