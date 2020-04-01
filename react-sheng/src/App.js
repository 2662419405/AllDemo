import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <div>
        <Link to="/">react16生命周期</Link>
        <br />
        <Link to="/sheng-three">react16.4生命周期</Link>
        <br />
        {this.props.children}
      </div>
    );
  }
}
