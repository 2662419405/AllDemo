// 用于拦截请求和响应
const axios = require('axios')

export default function(vm){
    // 设置请求拦截器
    axios.interceptors.request.use(config => {
        // 获取token
        const token = localStorage.getItem('token')
        if (token) { // 如果存在令牌这添加token请求头
            config.headers.Authorization = 'Bearer ' + token;
        }
        return config;
    })

    // 响应拦截器
    // 参数1表示成功响应
    // 这里只关心失败响应
    axios.interceptors.response.use(null, err => {
        if (err.response.status === 401) { // 没有登录或者令牌过期
          // 清空vuex和localstorage
          vm.$store.dispatch("logout");
          // 跳转login
          vm.$router.push("/login");
        }
        return Promise.reject(err);
      });
}