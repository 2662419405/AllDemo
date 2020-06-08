import React, { Component } from "react";
import Children from "../components/children";

export default class parent extends Component {
  constructor(props) {
    super(props);
    this.inputValueRef = React.createRef();
  }

  render() {
    return (
      <div style={{ marginTop: "100px" }}>
        我是refs转发实例,用来获取子组件的ref
        <Children ref={this.inputValueRef} />
        <button
          onClick={() =>
            (this.inputValueRef.current.innerHTML = "子组件被访问到了")
          }
        >
          访问子组件
        </button>
      </div>
    );
  }
}
