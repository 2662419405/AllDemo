import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Login from "./views/Login.vue";
import Cart from "./views/Cart.vue";
import History from "./utils/history";

Vue.use(History);
Vue.use(Router);

// 扩展Router，添加goBack方法
Router.prototype.goBack = function() {
  this.isBack = true;
  this.back();
};

const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/login",
      name: "login",
      component: Login
    },
    {
      path: "/cart",
      name: "cart",
      component: Cart
    },
    {
      path: "/about",
      name: "about",
      meta: {
        auth: true
      },
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/About.vue")
    }
  ]
});

// 路由守卫
router.beforeEach((to, from, next) => {
  if (to.meta.auth) {
    // 需要登录
    const token = localStorage.getItem("token");
    if (token) {
      next();
    } else {
      next({
        path: "/login",
        query: { redirect: to.path }
      });
    }
  } else {
    // 不需要登录验证
    next();
  }
});

// 每次从路由出来以后
router.afterEach((to, from) => {
  if (router.isBack) {
    History.pop();
    router.isBack = false;
    router.transitionName = "route-back";
  } else {
    History.push(to.path);
    router.transitionName = "route-forward";
  }
});

export default router;
