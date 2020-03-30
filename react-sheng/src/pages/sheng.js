import React, { Component } from "react";

export default class index extends Component {
  constructor(props) {
    console.log("react16构造函数");
    super(props);
    this.state = {
      title: "标题"
    };
  }

  render() {
    console.log("react16渲染");
    return (
      <div>
        react的16生命周期,
        <button onClick={() => this.setState({ title: "修改了" })}>
          修改标题
        </button>
        {this.state.title}
      </div>
    );
  }

  componentWillMount() {
    console.log("react16组件即将挂载");
  }

  componentDidMount() {
    console.log("react16已经挂载");
  }

  componentWillReceiveProps() {
    console.log("react16props发生了改变");
  }

  shouldComponentUpdate() {
    console.log("react16是否更新");
    return true;
  }

  componentWillUpdate() {
    console.log("react16开始更新");
  }

  componentDidUpdate() {
    console.log("react16更新完毕");
  }

  componentWillUnmount() {
    console.log("react16组件挂载掉");
  }
}
