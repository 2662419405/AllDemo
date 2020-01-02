import axios from 'axios'

export default {
    login(user){
        return axios.get('/api/login', {params:user})
    }
}