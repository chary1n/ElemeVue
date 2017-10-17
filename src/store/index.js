import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as getters from './getters'
import eleme from './modules/eleme'
import AccountInfo from '../model/AccountInfo'
Vue.use(Vuex);

export const store = new Vuex.Store({
  actions,
  getters,
  modules:{
    eleme,
  }
  // state: {
  //   accounts:[],
  //   mainAccount:new AccountInfo({}),
  //   loading:'',
  //   loading_msg:'正在获取检测账号登录信息...',
  // },
  // // getters: {
  // //   accounts: state => state.accounts,
  // //   mainAccount: state => state.mainAccount,
  // //   loading: state => state.loading,
  // //   loading_msg: state => state.loading_msg,
  // // },
  //
  // // mutations: {
  // //   [types.CHANGE_LOADING_MSG] (state, { msg }){
  // //     state.loading_msg = msg;
  // //   },
  // //   [types.CHANGE_LOADING_STATE] (state, { loading }){
  // //     state.loading = loading;
  // //   },
  // // },
  // //
  // // actions: {
  // //   changeLoadingMsg({commit, state }, msg){
  // //     commit(types.CHANGE_LOADING_MSG, msg);
  // //   },
  // //   changeLoadingState({commit, state }, loading){
  // //     commit(types.CHANGE_LOADING_MSG, loading);
  // //   }
  // // },

});
