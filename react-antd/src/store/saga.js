import { put,call,takeEvery } from 'redux-saga/effects';

const DemoData = {
    Demo(data){
        return new Promise((resolve,reject)=>{
            setTimeout(function(){
                resolve(data)
            },1000)
        })
    }
}

function* login(action){
    try{
        console.log(action)
        const data = yield call(DemoData.Demo,action.value); //call接收两个参数,第一个是调用的API,第二个是传递的数据
        yield put({type:'saga',value: data})
    }catch(e){
        yield put({type: 'saga',value: e.message})
    }
}

function* mySaga(){
    yield takeEvery("saga",login)
}   

export default mySaga;
