import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import './common.styl'
Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
  location.href = 'https://blog.websong.xin'
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
