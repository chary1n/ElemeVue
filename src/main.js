// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import Vue from 'vue'
import App from './App'
import router from './router'
import Lockr from 'lockr'
Vue.config.productionTip = false

import Axios from 'axios'
// Vue.use(Axios);

import {store} from './store/index'


window.Lockr = Lockr;



Vue.use(ElementUI);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store:store,
  template: '<App/>',
  components: { App },
})
