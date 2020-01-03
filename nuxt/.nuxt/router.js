import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _66308320 = () => interopDefault(import('..\\pages\\users.vue' /* webpackChunkName: "pages_users" */))
const _7c3e0d62 = () => interopDefault(import('..\\pages\\users\\index.vue' /* webpackChunkName: "pages_users_index" */))
const _b852a31e = () => interopDefault(import('..\\pages\\users\\detail.vue' /* webpackChunkName: "pages_users_detail" */))
const _6b3862dd = () => interopDefault(import('..\\pages\\users\\good.vue' /* webpackChunkName: "pages_users_good" */))
const _5154004a = () => interopDefault(import('..\\pages\\users\\_id.vue' /* webpackChunkName: "pages_users__id" */))
const _20c6a8ea = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages_index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/users",
    component: _66308320,
    children: [{
      path: "",
      component: _7c3e0d62,
      name: "users"
    }, {
      path: "detail",
      component: _b852a31e,
      name: "users-detail"
    }, {
      path: "good",
      component: _6b3862dd,
      name: "users-good"
    }, {
      path: ":id",
      component: _5154004a,
      name: "users-id"
    }]
  }, {
    path: "/",
    component: _20c6a8ea,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
