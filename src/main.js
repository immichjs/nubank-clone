import Vue from 'vue'
import App from './App.vue'
import VueMeta from 'vue-meta'
import store from './store'

import 'boxicons'
import './assets/css/index.css'

Vue.use(VueMeta, { refreshOnceOnNavigation: true })
Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
