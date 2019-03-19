import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import '@/assets/stylus/reset.styl'

import Svt from 'song-vue-template'
import 'song-vue-template/dist/css/svt.css'

Vue.config.productionTip = false

Vue.use(Svt)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
