import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import '@/assets/stylus/reset.styl'
console.log(navigator.userAgent)

import 'lib-flexible/flexible.js'
import Svt from 'song-vue-template'
import 'song-vue-template/dist/css/p_svt.css'

Vue.config.productionTip = false

Vue.use(Svt)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
