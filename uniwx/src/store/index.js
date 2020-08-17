import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    userinfo: null,
  },
  mutations: {
    login(state, provider) {
      console.log(state, provider)
    },
  },
})

export default store
