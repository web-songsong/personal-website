import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import './common.styl'
Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
  to.path === '/' ? next('/blog') : next()
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
