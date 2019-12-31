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