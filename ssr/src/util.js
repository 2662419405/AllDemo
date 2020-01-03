import axios from 'axios';

export default function(){
    // 请求拦截,添加一个响应头
    axios.interceptors.request.use((config)=>{
        config.headers.ss = "sunhang"
        return config;
    })
}