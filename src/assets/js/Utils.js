const eleme_userinfo = "https://waltz.ele.me/qq/userinfo/?code="
import Axios from 'axios'
const Utils = {

  methods: {
    showAlert(message, ok_cb, fail_cb, type = 'warning') {
      this.$confirm(message, '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: type
      }).then(() => {
        ok_cb();
      }).catch(() => {
        fail_cb();
      });
    },
    getUserInfo(code, ok_cb, fail_cb) {
      var info_url = eleme_userinfo + code
      console.log(info_url);
      Axios.get(info_url).then((res) => {
        ok_cb(res);
      }).catch((err) => {
        fail_cb(err);
      })
    }
  }
}

export default Utils
