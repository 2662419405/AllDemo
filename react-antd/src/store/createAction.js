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