import axios from "axios";
import router from "umi/router";

const userinfo = JSON.parse(localStorage.getItem("userinfo")) || {
  token: "",
  role: "",
  username: "",
  balance: 0
};

// api
function login(payload) {
  return axios.post("/api/login", payload);
}

export default {
  namespace: "user", // 可省略
  state: userinfo, // 初始状态：缓存或空对象
  effects: {
    // action: user/login
    *login({ payload }, { call, put }) {
      try {
        const {
          data: { code, data: userinfo }
        } = yield call(login, payload);
        if (code == 0) {
          // 登录成功: 缓存用户信息
          localStorage.setItem("userinfo", JSON.stringify(userinfo));
          yield put({ type: "init", payload: userinfo });
          router.push("/");
        } else {
          // 登录失败：弹出提示信息，可以通过响应拦截器实现
        }
      } catch (error) {}
    }
    // *logout({ payload }, { call, put }) {
    //   localStorage.removeItem("userinfo");
    //   yield put({ type: "clear" });
    //   router.push("/login");
    // }
  },
  reducers: {
    init(state, action) {
      // 覆盖旧状态
      return action.payload;
    }
    // clear(state, action) {
    //   return initUserinfo;
    // }
  }
};
