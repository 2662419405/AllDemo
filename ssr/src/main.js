import Vue from 'vue'
import App from './App.vue'
import router from './router'
import interceptor from './util'

Vue.config.productionTip = false

var app = new Vue({
  render: h => h(App),
  router,
}).$mount('#app')

interceptor(app)