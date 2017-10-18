const getters = {
  accounts: state => {
    if (state.accounts == ''){
    state.accounts = Lockr.get("accounts", {});
    }
    return state.accounts
  },
  mainAccount:state => {
    if (state.mainAccount == ''){
      state.mainAccount = Lockr.get("mainAccount", {});
    }
    return state.mainAccount;
  },
  loading: state => state.loading,
  loading_msg: state => state.loading_msg,
  log_msg: state => state.log_msg,
}

export default getters
