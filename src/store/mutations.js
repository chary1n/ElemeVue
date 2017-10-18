import {AccountInfo} from '../model/AccountInfo'
import * as types from './mutation-types'
const mutations = {
  [types.CHANGE_LOADING_MSG] (state, msg){
    state.loading_msg = msg;
  },
  [types.CHANGE_LOADING_STATE] (state, loading){
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
      state.accounts.push(accObj);
      Lockr.set("accounts", state.accounts);
    }
  }
}

export default mutations
