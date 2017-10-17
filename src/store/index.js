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
  modules: {
    eleme,
  }
});
