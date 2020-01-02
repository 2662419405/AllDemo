# vue-mart

#### 技术栈: vue vuex vue-router cube-ui

**Authorization = Bearer + token** 是一种规范

> 拦截器的制作
```js
import axios from 'axios'

export default function(vm){
    //  拦截请求
    axios.interceptors.request.use((config)=>{
        const token = localStorage.getItem('token')
        if(token){
            config.headers.Authorization = 'Bearer'+token;
        }
        return config;
    })
    // 设置相应拦截器
    // 参数第一个代表成功相应
    axios.interceptors.response.use(null,err=>{
        if(err.response.status === 401){
            // 清空vuex和localstorage
            vm.$store.dispatch('logout')
            // 跳转到login
            vm.$router.push('/login')
        }
        return Promise.reject(err)
    })
}
```

> 解决跨域问题

```js
configureWebpack: {
    devServer: {
        proxy: {
        "/api": {
            target: "http://127.0.0.1:3000/", 
            changOrigin: true
        }
        }, 
    }
}
```

## 启动
启动后台token
```js
cd server
nodemon server.js
```
