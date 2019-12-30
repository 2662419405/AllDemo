import Vue from 'vue'
import Vuex from 'vuex'
import vs from '../service/user'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLogin: false
  },
  mutations: {
    setLoginState(state,b){
      state.isLogin = b
    }
  },
  actions: {
    login({commit},user) {
    // 登录请求 , 控制器
      vs.login(user).then((res)=>{
        const { code } = res.data;
        if(code){
          // 登录成功
          commit('setLoginState')
        }
      })
    }
  },
  modules: {
  }
})
