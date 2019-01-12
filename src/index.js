import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import VueRouter from 'vue-router'
import routes from './router'
import stores from './store'
import {plugins, tPage, tHeader, tButton, tCell, tGroup} from 'vuti'

Vue.use(plugins)
Vue.use(Vuex)
Vue.component('tPage', tPage)
Vue.component('tHeader', tHeader)
Vue.component('tButton', tButton)
Vue.component('tCell', tCell)
Vue.component('tGroup', tGroup)
const store = new Vuex.Store(stores)

const router = new VueRouter({
  routes
})

window._vm = new Vue({
  el: '#entry',
  template: '<App />',
  store,
  router,
  components: {App}
})
