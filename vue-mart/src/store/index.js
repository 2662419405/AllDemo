import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLogin: localStorage.getItem('token') ? true : false ,
    userInfo: {}
  },
  mutations: {
    setLoginState(state,b){
      state.isLogin = b
    },
    setInfoSetting(state,info){
      state.userInfo = info
    }
  },
  actions: {
    login({commit},user) {
    // 登录请求 , 控制器
      return axios.get('/api/login',{params:user}).then((res)=>{
        const { token } = res.data;
        if(token){
          // 登录成功
          commit('setLoginState',true);
          localStorage.setItem('token',token)
        }
        return true;
      })
    },
    getInfo({commit}){
      axios.get('/api/userinfo').then((res)=>{
        if(res.data.data){
          commit('setInfoSetting',res.data.data)
        }
      })
    },
    logout({commit}){
      // 清楚缓存
      window.console.log('1')
      localStorage.removeItem('token')
      // 重置状态
      commit("setLoginState",false)
    }
  },
  modules: {
  }
})
