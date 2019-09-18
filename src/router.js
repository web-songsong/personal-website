import Vue from 'vue'
import Router from 'vue-router'
const routerPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return routerPush.call(this, location).catch(error => error)
}
Vue.use(Router)
export function createRouter() {
  return new Router({
    mode: 'history',
    routes: [
      {
        path: '/home',
        name: 'home',
        component: () =>
          import(/* webpackChunkName: "home" */ './views/home/home.vue')
      }
    ]
  })
}
