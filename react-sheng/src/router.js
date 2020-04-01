import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import App from "./App";
import Sheng from "./pages/sheng";
import ShengThree from "./pages/sheng_three";

export default class router extends Component {
  render() {
    return (
      <BrowserRouter>
        <App>
          <Switch>
            <Route exact path="/" component={Sheng}></Route>
            <Route path="/sheng-three" component={ShengThree}></Route>
          </Switch>
        </App>
      </BrowserRouter>
    );
  }
}
