export const AccountInfo = class AccountInfo{
  constructor(json){
    console.log("12312");
    this.city= json.city || '',
      this.eleme_key= json.eleme_key || '',
      this.figureurl= json.figureurl || '',
      this.figureurl_1= json.figureurl_1 || '',
      this.figureurl_2= json.figureurl_2 || '',
      this.figureurl_qq_1= json.figureurl_qq_1 || '',
      this.figureurl_qq_2= json.figureurl_qq_2 || '',
      this.gender= json.gender || '',
      this.is_lost= json.is_lost || '',
      this.is_yellow_vip= json.is_yellow_vip || '',
      this.is_yellow_year_vip= json.is_yellow_year_vip || '',
      this.level= json.level || '',
      this.msg= json.msg || '',
      this.nickname= json.nickname || '',
      this.openid= json.openid || '',
      this.province= json.province || '',
      this.ret= json.ret || '',
      this.vip= json.vip || '',
      this.year= json.year || '',
      this.yellow_vip_level= json.yellow_vip_level || ''
  }
  setData(json){
    for (var key in json){
      this[key] = json[key];
    }
  }
}
