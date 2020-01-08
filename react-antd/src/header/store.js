import * as actionTypes from '../store/actionTypes'

const defaultArr = {
    title:'头部数据'
}

export default (state = defaultArr,action) =>{
    switch(action.type){
        case "change":
            return {...state,title: action.value}
        case actionTypes:
            console.log(1)
            return {...state,title: action.value}
        default :
        return defaultArr;
    }
}