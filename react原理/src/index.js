// import React from "react";
// import ReactDOM from "react-dom";
import React, { Component } from "./kreact";
import ReactDOM from "./kreact-dom";

function Comp(props) {
  return <h2>hi {props.name}</h2>;
}

class Comp2 extends Component {
  render() {
    return (
      <div>
        <h2>hi {this.props.name}</h2>
      </div>
    );
  }
}

// vdom
const users = [{ name: "tom", age: 20 }, { name: "jerry", age: 20 }];
const jsx = (
  <div id="demo" style={{ color: "red", border: "1px solid green" }}>
    <span onClick={() => alert("click")}>hi</span>
    <Comp name="函数组件" />
    <Comp2 name="类组件" />
    <ul>
      {users.map(user => (
        <li key={user.name}>{user.name}</li>
      ))}
    </ul>
  </div>
);

console.log(jsx);

ReactDOM.render(jsx, document.querySelector("#root"));
