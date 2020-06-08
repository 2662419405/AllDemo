import * as actionTypes from '../store/actionTypes'

const defaultArr = {
    title:'头部数据',
    name: ''
}

export default (state = defaultArr,action) =>{
    switch(action.type){
        case "change":
            return {...state,title: action.value}
        case "saga":
            return {...state, name: action.value}
        case actionTypes:
            return {...state,title: action.value}
        default :
        return defaultArr;
    }
}