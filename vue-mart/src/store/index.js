import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLogin: false,
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
      return axios.get('http://shtodream.cn:7300/mock/5e08a4657d30fb4da2043fcb/demo/users').then((res)=>{
        const { token,username,password } = res.data;
        if(user.username == username && password == user.passwd){
          // 登录成功
          commit('setLoginState',true);
          localStorage.setItem('token',token)
        }
        return true;
      })
    },
    getInfo({commit}){
      axios.get('http://shtodream.cn:7300/mock/5e08a4657d30fb4da2043fcb/demo/userinfo').then((res)=>{
        if(res.data.data){
          commit('setInfoSetting',res.data.data)
        }
      })
    }
  },
  modules: {
  }
})
