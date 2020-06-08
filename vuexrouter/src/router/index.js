import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Demo from "../views/Demo.vue";
import Php from "../views/path/Php.vue";
import Html from "../views/path/Html.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/demo",
    component: Demo,
    children: [
      {
        path: "php",
        component: Php
      },
      {
        path: "html/:id",
        name: "html",
        component: Html
      }
    ]
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
