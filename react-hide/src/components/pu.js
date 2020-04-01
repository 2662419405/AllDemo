import React, { Component } from "react";
import Hide from "../hide/foo";

class pu extends Component {
  render() {
    return <div>我是一个普通组件</div>;
  }
}

export default Hide(pu);
