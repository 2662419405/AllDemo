## antd按需加载的坑

1. 安装需要的依赖

`npm i react-app-rewired@2.0.2-next.0 babel-plugin-import `

2. 配置启动脚本

```js
/* package.json 的配置需要做如下修改*/
"scripts": {
-   "start": "react-scripts start",
+   "start": "react-app-rewired start",
-   "build": "react-scripts build",
+   "build": "react-app-rewired build",
-   "test": "react-scripts test --env=jsdom",
+   "test": "react-app-rewired test --env=jsdom",
}
```

3. 配置文件,在根目录生成一个`config-overrides.js`

```js
const {
  override,
  fixBabelImports,
  addLessLoader,
} = require("customize-cra");
 
 
module.exports = override(
  fixBabelImports("import", {
    libraryName: "antd", libraryDirectory: "es", style: true // change importing css to less
  }),
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: { "@primary-color": "#1DA57A" }
  })
);
```

* 安装react-router
* 安装react-redux
* 安装redux

路由对象的三个参数

1. history 用来前几和后退或者增加路由选项
2. match 用来获取参数列表
3. location 当前url信息

react-router路由守卫

## redux-saga的使用

* 配置store文件

```js
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'

import reducer from './reducers'
import mySaga from './sagas'

const sagaMiddleware = createSagaMiddleware()
const store = createStore(
  reducer,
  applyMiddleware(sagaMiddleware)
)

sagaMiddleware.run(mySaga) //很关键,必须要运行saga
```

* 配置saga文件

```js
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

```

* 调用起来就和正常的派发dispatch没有区别