import us from "@/service/user";

export default {
  state: {
    isLogin: localStorage.getItem("token") ? true : false
  },
  mutations: {
    setLoginState(state, b) {
      state.isLogin = b;
    }
  },
  actions: {
    login({ commit }, user) {
      // 登录请求
      return us.login(user).then(res => {
        const { code, token } = res.data;
        if (code) {
          // 登录成功
          commit("setLoginState", true);
          localStorage.setItem("token", token);
        }
        return code;
      });
    },
    logout({ commit }) {
      // 清缓存
      localStorage.removeItem("token");
      // 重置状态
      commit("setLoginState", false);
    }
  }
};
