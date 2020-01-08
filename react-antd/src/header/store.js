const defaultArr = {
    title:'头部数据'
}

export default (state = defaultArr,action) =>{
    switch(action.type){
        default :
        return defaultArr;
    }
}