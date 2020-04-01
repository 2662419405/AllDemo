import React, { Component } from "react";

export default class tabbar extends Component {
  render() {
    return (
      <div
        style={{
          position: "fixed",
          bottom: "0",
          textAlign: "center",
          width: "100%",
          padding: "20px",
          boxSizing: "border-box"
        }}
      >
        我是底部tabbar
      </div>
    );
  }
}
