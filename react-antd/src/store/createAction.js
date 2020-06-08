import * as ActionType from './actionTypes'

export const changeValue = ()=>{
    return (dispatch)=>{
        setTimeout(function(){
            var arr = {
                type: ActionType.CHANGE_VALUE,
                value: "修改了异步操作"           
            }
            dispatch(arr)
        },1000)
    }
}

export const sagaData = (data)=>{
    var arr = {
        type: 'saga',
        value: `这是saga传递的数据${data}`
    }
    return arr;
}