import axios from 'axios'

export default {
    getGoodsInfo(){
        return axios.get('/api/goods')
        .then(res=>{
            const {code, data: goodsInfo, slider, keys} = res.data;
            // 数据处理
            if (code) {
                return {goodsInfo, slider, keys}
            } else {
                return null;
            }
        })
    }
}