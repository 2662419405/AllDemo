import Vue from 'vue'
import App from './App'

// 引入全局存储
import store from '@/store'
// 挂载方法
import $mRouter from '@/utils/router'

// 网络状态监听
// uni.getNetworkType({
//   success: res => {
//     store.dispatch('networkStateChange', res.networkType)
//   },
// })
// uni.onNetworkStatusChange(function(res) {
//   store.dispatch('networkStateChange', res.networkType)
// })
// 挂载全局自定义方法
Vue.prototype.$mStore = store
Vue.config.productionTip = false
Vue.prototype.$mRouter = $mRouter

App.mpType = 'app'

const app = new Vue({
  ...App,
  store: store,
})
app.$mount()
