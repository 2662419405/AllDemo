import React, { Component } from "react";

export default class sheng_two extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
    console.log("16.4构造函数");
  }

  componentDidMount() {
    console.log("16.4组件挂载完成");
  }

  componentDidUpdate() {
    console.log("16.4组件更新完成");
  }

  componentWillUnmount() {
    console.log("16.4组价挂载销毁");
  }

  shouldComponentUpdate(nextProps, nextState) {
    // 核心就是接受的两个参数,可以让下次的值和本次的进行对比,如果对比之后不想要渲染,则return false
    return nextState.count === 5 ? false : true;
  }

  static getDerivedStateFromProps(nextProps, nextState) {
    console.log("getDerivedStateFromProps, " + nextState.count);
    // 意思就是如果下一次的state中的达到某个状态的时候,可以返回一个状态,这个状态会和state进行合并
    return nextState.count < 8 ? null : { count: 0 };
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("getSnapshotBeforeUpdate, " + prevState.count);
    // 官方介绍,很少会用到,可以用在比如聊天室发送完消息之后,自动滚动到底部
    return null;
  }

  render() {
    console.log("16.4组件渲染");
    return (
      <div>
        生命周期16.4版本
        {this.state.count}
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          +
        </button>
      </div>
    );
  }
}
