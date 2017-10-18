import {AccountInfo} from '../../model/AccountInfo'
import * as types from '../mutation-types'
const state = {
  accounts:[],
  mainAccount:'',
  loading:'',
  loading_msg:'正在获取检测账号登录信息...',
}

const getters = {
  accounts: state => {
    // if (state.accounts.length == 0){
      state.accounts = Lockr.get("accounts");
    // }
  },
  mainAccount:state => {
    if (state.mainAccount == undefined){
      state.mainAccount = Lockr.get("mainAccount");
    }
  },
  loading: state => state.loading,
  loading_msg: state => state.loading_msg,
}

const  actions = {
  changeLoadingMsg({ commit }, msg){
    commit(types.CHANGE_LOADING_MSG, msg);
  },
  changeLoadingState({ commit }, loading){
    commit(types.CHANGE_LOADING_STATE, {loading: loading});
  },
  addAccount({commit},{isMain, account}){
    console.log("asdasda");
    commit({
      type: types.SET_ACCOUNT_INFO,
      isMain: isMain,
      account: account
    })
  }
}

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

export default {
  state,
  getters,
  actions,
  mutations,
}
