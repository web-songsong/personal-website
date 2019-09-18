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
        path: '/activity/edit',
        name: 'activity-edit',
        component: () =>
          import(
            /* webpackChunkName: "activity-edit" */ './views/activity/activity-edit.vue'
          )
      },
      {
        path: '/activity/list',
        name: 'activity-list',
        component: () =>
          import(
            /* webpackChunkName: "activity-list" */ './views/activity/activity-list.vue'
          )
      }
    ]
  })
}
