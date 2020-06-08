# 入门学习React

> state的坑

state 不允许直接修改 必须通过this.setState()
应该去批量执行  传递一个对象
```js
this.setState({

})
```
* 缺点,不能够去控制顺序,他们会被放到一个异步队列中去

设置一个函数
```js
this.setState((state)=>{
    return {
        counter: state.counter + 1
    }
})
```
* 上面的数据是立即更新的,如果一个数据的更新依赖于另外一个数据,那么就应该通过函数的方式去修改数据state

state修改完成数据之后,还可以有一个回调函数
this.state(fn,callback)

## 生命周期 React v16.3 

```js
componentWillMount() {
// 此时可以访问状态和属性，可进行api调用等
console.log("2.组件将要挂载");
}
componentDidMount() {
// 组件已挂载，可进行状态更新操作
console.log("3.组件已挂载");
}
componentWillReceiveProps() {
// 父组件传递的属性有变化，做相应响应
console.log("4.将要接收属性传递");
}
shouldComponentUpdate() {
// 组件是否需要更新，需要返回布尔值结果，优化点
console.log("5.组件是否需要更新？");
return true;
}
componentWillUpdate() {
// 组件将要更新，可做更新统计
console.log("6.组件将要更新");
}
componentDidUpdate() {
// 组件更新
console.log("7.组件已更新");
}
componentWillUnmount() {
// 组件将要卸载, 可做清理工作
console.log("8.组件将要卸载");
}
```
![老版本生命周期](https://cdn.jsdelivr.net/gh/2662419405/imgPlus/16775500-8d325f8093591c76.webp)

## 新特性 16.3

react 16.3版本出现了两个新的生命周期函数，并将逐渐废弃componentWillMount()、componentWillReceiveProps()、componentWillUpdate()

![新版本生命周期](https://cdn.jsdelivr.net/gh/2662419405/imgPlus/1370028-20190727163040411-1031872559.png)

> 更新新特性的原因: 在React16版本之后推出了Fiber,因为要异步执行 async rendering, 在render之前的函数都可能被执行了多次,之前的函数有

1. componentWillMount
2. componentWillUpdate
3. componentWillReceiveProps
4. shouldComponentUpdate

新增的生命周期

<!-- 需要配合static.xxx来调用 -->
1. getSnapshotBeforeUpdate(prevProps, prevState)
2. componentDidCatch  
<!-- 补货异常错误处理 -->

## React组件化