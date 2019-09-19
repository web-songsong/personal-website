import Vue from 'vue'
import App from './App.vue'
import { createRouter } from './router'
import { createStore } from './store'
import axios from 'utils/axios'
import $ from 'jquery'
import { sync } from 'vuex-router-sync'
import './assets/css/reset.css'
Vue.prototype.$axios = axios
export function createApp() {
  const router = createRouter()
  const store = createStore()
  // router.beforeEach((to, from, next) => {
  //   /* 路由发生变化修改页面title */
  //   if (to.meta.title) {
  //     document.title = to.meta.title
  //   }
  //   next()
  // })
  sync(store, router)
  const app = new Vue({
    router,
    store,
    render: h => h(App)
  })
  return { app, router, store }
}
