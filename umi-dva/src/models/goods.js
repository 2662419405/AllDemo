// 首先安装axios
import axios from "axios";

// api
function getGoods() {
  return axios.get("/api/goods");
}

export default {
  namespace: "goods", // model的命名空间，区分多个model
  state: [], // 初始状态
  effects: {
    // 异步操作
    *getList(action, { call, put }) {
      const res = yield call(getGoods);
      yield put({ type: "initGoods", payload: res.data.result });
    }
  },
  reducers: {
    // 同步操作
    // 更新状态
    addGood(state, action) {
      return [...state, { title: action.title }];
    },
    initGoods(state, action) {
      return action.payload;
    }
  }
};
