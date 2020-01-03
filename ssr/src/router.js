// router.js
import Vue from 'vue'
import Router from 'vue-router'
import Index from './components/Index'
import Kkb from './components/Kkb'
Vue.use(Router)


export function createRouter () {
  return new Router({
    mode: 'history',
    routes: [
        {path:"/",component:Index },
        {path:"/kkb",component:Kkb },
      // ...
    ]
  })
}