import React, { Component } from "react";
import { inject, observer } from "mobx-react";

class App extends Component {
  render() {
    return <div>我是首页</div>;
  }
}

export default inject("indexStore")(observer(App));
