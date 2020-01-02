import Vue from 'vue'
import './cube-ui'
import App from './App.vue'
import router from './router'
import store from './store'
import interceptor from './interceptor'
import {createAPI} from 'cube-ui'
import CartAnim from '@/components/CartAnim'
import create from './utils/create'

Vue.config.productionTip = false

// 给vue注册实例方法，方法名$createCartAnim
createAPI(Vue, CartAnim, ['transitionend'])

Vue.prototype.$create = create;

const app = new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

// 执行拦截器初始化
interceptor(app);