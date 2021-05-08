import Vue from 'vue'
import App from './App.vue'
import title from './assets/mixins/title'

import 'boxicons'
import './assets/css/index.css'
import store from './store'

Vue.mixin(title)
Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
