## 重点内容

* 如果需要注册全局拦截器 -> 在src目录下面创建global.js文件

* 常见状态码
  
> 202: "一个请求已经进入后台排队（异步任务）。",
  401: "用户没有权限（令牌、用户名、密码错误）。",
  404: "发出的请求针对的是不存在的记录，服务器没有进行操作。",
  500: "服务器发生错误，请检查服务器。"

axios设置拦截器
```js
axios.interceptors.response.use(null, ({ response }) => {
    console.log( `请求错误 ${response.status}: ${response.config.url}` )
} )
```

* umi的mock数据模拟的规范是遵守express框架的参数

* models数据规范如下

```js

function callLogin(value){
    return axios.post('/xxxx',value);
}

export default {
    namespace: 'user',
    defaultState: {
        // 这个地方存放默认的mock数据
    },
    effects: {
        // 调用namespace/下面的函数名 -> "user/login"
        *login({value},{call,put}){
            // value是指结构出来的参数, call是调用service的api, put是调用完call之后再去派发的action
            try{
                const returnData = yield call(callLogin,value)
                put({ type: "init", payload: userinfo })
            }catch (error) {}
        }
    },
    reducers: {
        init(state,action){  //init -> 指的是effects中的put
            // 编写数据
            return action.value
        }
    }
}
```

* 设置骨架屏

1. 创建一个占位的数组 `arr:new Array(8).fill({})`
2. 在循环遍历列表的时候设置一个三元运算符,如果没有数据就使用antd库提供的骨架屏 {this.state.data?<div>数据</div>:<Skeleton active={true} />}
3. 可以给骨架屏设置一个动画`actice={true}`