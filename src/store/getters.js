const getters = {
  accounts: state => {
    if (state.accounts.length == 0){
    state.accounts = Lockr.get("accounts");
    }
    return Lockr.get("accounts", []);
  },
  mainAccount:state => {
    if (state.mainAccount == ''){
      state.mainAccount = Lockr.get("mainAccount");
    }
    return state.mainAccount;
  },
  loading: state => state.loading,
  loading_msg: state => state.loading_msg,
}

export default getters
