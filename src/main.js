// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// commit tes
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { store } from "./store.js";
const fb = require('./firebaseConfig.js')
import './assets/scss/app.scss'

import 'expose-loader?$!expose-loader?window.jQuery!expose-loader?jQuery!jquery'
import 'bootstrap'
//import BootstrapVue from 'bootstrap-vue'   
//uncomment this if you use bootstrap-vue

require('./../node_modules/bootstrap/dist/css/bootstrap.css')
//require('./../node_modules/bootstrap-vue/dist/bootstrap-vue.css')
//uncomment this if you use bootstrap-vue
require('./../node_modules/font-awesome-scss/css/font-awesome.min.scss')

//Vue.use(BootstrapVue);

Vue.config.productionTip = false

/* eslint-disable no-new */
let app
fb.auth.onAuthStateChanged(user => {
  if (!app) {
      app = new Vue({
          el: '#app',
          router,
          store,
          template: '<App/>',
          components: { App }
      })
  }
})
