import {AccountInfo} from '../model/AccountInfo'
import * as types from './mutation-types'

const  actions = {
  changeLoadingMsg({ commit }, msg){
    commit(types.CHANGE_LOADING_MSG, msg);
  },
  changeLoadingState({ commit }, loading){
    commit(types.CHANGE_LOADING_STATE, {loading: loading});
  },
  addAccount({commit},{isMain, account}){
    commit({
      type: types.SET_ACCOUNT_INFO,
      isMain: isMain,
      account: account
    })
  },
  updateLogMsg({commit}, str){
    commit({
      type: types.UPDATE_LOG_MSG,
      str: str,
    })
  }

}



export default actions
