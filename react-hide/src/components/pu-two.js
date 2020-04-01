import React, { Component } from "react";
import Foo from "../hide/foo";

class puTwo extends Component {
  render() {
    return <div>我是一个组件{this.props.size}</div>;
  }
}

export default Foo(puTwo);
