import AccountInfo from '../../model/AccountInfo'
import * as types from '../mutation-types'
const state = {
  accounts:[],
  mainAccount:new AccountInfo({}),
  loading:'',
  loading_msg:'正在获取检测账号登录信息...',
}

const getters = {
  // accounts: state => state.accounts,
  // mainAccount: state => state.mainAccount,
  // loading: state => state.loading,
  // loading_msg: state => state.loading_msg,
}

const  actions = {
  changeLoadingMsg({ commit }, msg){
    commit(types.CHANGE_LOADING_MSG, msg);
  },
  changeLoadingState({ commit }, loading){
    commit(types.CHANGE_LOADING_STATE, {loading: loading});
  },
  addAccount({coomit}, {isMain, account}){
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
    if(isMain){
      //主
      state.mainAccount = account
    }else {
      state.accounts.push(account)
    }
  }
}

export default {
  state,
  getters,
  actions,
  mutations,
}