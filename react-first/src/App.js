import React from 'react';
import { Welcome, Welcome1 } from './components/Hello';
import Clock from './components/clock';
import CardShop from './components/CardShop';
import AntdTest from './antd/AntdTest'

class App extends React.Component {

  constructor(props){
    super(props);
    console.log("1.组件构造函数执行");
  }

  render(){
    return (
      <div className="App">
        <Welcome name="sunhang" changeData={(data)=>this.demoData(data)}></Welcome>
        <Welcome1 name="canmeng"></Welcome1>
        <Clock />
        <CardShop title="购物车"/>
        <AntdTest />
      </div>
    );
  }
  demoData = (data)=>{
    console.log(data)
  }
  componentWillMount() {
    // 此时可以访问状态和属性，可进行api调用等
    console.log("2.组件将要挂载");
  }
  componentDidMount() {// 80%  api调用 函数的dom挂载完成 所以调用api用数据去驱动视图修改
    // 组件已挂载，可进行状态更新操作
    console.log("3.组件已挂载");
  }
  componentWillReceiveProps() {
    // 父组件传递的属性有变化，做相应响应 props发生了改变会调用
    console.log("4.将要接收属性传递");
  }
  shouldComponentUpdate() {
    // 组件是否需要更新，需要返回布尔值结果，优化点
    // 如果你要进行性能优化 你会在哪个生命周期里面完成
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
}

export default App;
