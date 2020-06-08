import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./pages/home";
import { store, Provider, Consumer } from "./store/home";

ReactDOM.render(
  <Provider value={store}>
    <Consumer>{ctx => <App {...ctx} />}</Consumer>
  </Provider>,
  document.getElementById("root")
);
