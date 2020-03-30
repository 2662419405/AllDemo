import React, { Component } from "react";

export default class sheng_two extends Component {
  constructor(props) {
    super(props);
    console.log("16.4构造函数");
  }

  render() {
    console.log("16.4组件渲染");
    return <div>生命周期16.4版本</div>;
  }

  shouldComponentUpdate() {
    console.log("16.4是否被更新了");
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("16.4组件更新,但是在更新DOM之前");
    return null;
  }

  componentDidUpdate() {
    console.log("16.4组件更新完毕");
  }

  componentDidMount() {
    console.log("16.4组件挂载完成");
  }

  componentWillUnmount() {
    console.log("16.4组件被销毁了");
  }
}
