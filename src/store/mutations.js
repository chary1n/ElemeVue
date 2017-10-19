import {AccountInfo} from '../model/AccountInfo'
import * as types from './mutation-types'
const mutations = {
  [types.CHANGE_LOADING_MSG] (state, msg){
    state.loading_msg = msg;
  },
  [types.CHANGE_LOADING_STATE] (state, loading){
    console.log("loading----" + loading)
    state.loading = loading;
  },
  [types.SET_ACCOUNT_INFO] (state, { isMain, account }){
    var accObj = new AccountInfo(account);
    console.log(accObj);
    if(isMain){
      //主
      state.mainAccount = accObj
      Lockr.set("mainAccount", accObj);
    }else {
      state.accounts = accObj;
      Lockr.set("accounts", accObj);
    }
  },
  [types.UPDATE_LOG_MSG] (state, payload){
    state.log_msg.splice(0, 0, payload.str);
    console.log(state.log_msg);
  }
}

export default mutations
