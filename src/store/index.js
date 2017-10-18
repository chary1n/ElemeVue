import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import mutations from './mutations'
import getters from './getters'
// import eleme from './modules/eleme'

Vue.use(Vuex);
import {AccountInfo} from '../model/AccountInfo'
import * as types from './mutation-types'



export const store = new Vuex.Store({
  actions,
  mutations,
  getters:getters,

  state: {
    accounts:'',
    mainAccount:'',
    loading:'',
    loading_msg:'正在获取检测账号登录信息...',
    log_msg: '',
  }

});
