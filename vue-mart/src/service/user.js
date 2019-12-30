import axios from 'axios';

export default {
    login(){
        axios.get('http://shtodream.cn:7300/mock/5e08a4657d30fb4da2043fcb/demo/users').then((res)=>{
            window.console.log(res)
        })
    }
}