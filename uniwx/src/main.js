import Vue from 'vue'
import App from './App'
// 引入组件
import rmImage from '@/components/rm-image'
// 引入全局存储
import store from '@/store'
// 挂载方法
import $mRouter from '@/utils/router'
// 注册全局组件

// 挂载全局自定义方法
Vue.prototype.$mStore = store
Vue.config.productionTip = false
Vue.prototype.$mRouter = $mRouter
Vue.component('rmImage', rmImage)
App.mpType = 'app'

const app = new Vue({
  ...App,
  store: store,
})
app.$mount()
