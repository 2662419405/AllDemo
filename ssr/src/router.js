import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from './components/Home.vue'
import User from './components/users.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/home',
        name: 'home',
        component: Home
    },
    {
        path: '/users',
        name: 'users',
        component: User
    }
]

const Router = new VueRouter({
    routes,
    mode: 'history'
})

export default Router;