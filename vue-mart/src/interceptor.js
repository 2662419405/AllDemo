//  拦截请求
import axios from 'axios'

export default function(){
    axios.interceptors.request.use((config)=>{
        const token = localStorage.getItem('token')
        if(token){
            config.headers.token = token;
        }
        return config;
    })
}