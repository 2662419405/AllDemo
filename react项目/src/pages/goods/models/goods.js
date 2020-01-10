import axios from 'axios';

// api
function getGoods(){
  return axios.get('/api/goods')
}

export default {
  namespace: "goods",
  state: [],
  effects: {
    *getList(action, {call, put}){           
      const res = yield call(getGoods)
      yield put({ type: 'initGoods', payload: res.data.result })
    }
  },
  reducers: {
    initGoods(state,{payload}){
      return payload
    },
    addGood(state, action) {
      console.log(action);
      return [...state, { title: action.payload.title }];
    }
  }
};
