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
        path: '/test',
        name: 'home',
        component: () =>
          import(/* webpackChunkName: "test" */ './views/test/test.vue')
      },
      {
        path: '/',
        redirect: '/test'
      }
    ]
  })
}
