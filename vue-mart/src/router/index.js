import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/about',
    meta: {
      auth: true
    },
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  routes 
})

// 路由的守卫
router.beforeEach((to,from,next)=>{
  if(to.meta.auth){
    // 需要登录
    const token = localStorage.getItem('token')
    if( token ){
      next()
    }else{
      next({
        path: '/login',
        query: { redirect: to.path } 
        // query是为了保证用户登录之后,可以跳转到about页面,而不是/home页面
      })
    }
  }else{
    // 不需要登录验证
    next()
  }
})

export default router
