import React from "react";
import ShUseState from "./shUseState";
import ShUserReducer from "./shUseReducer";
import ShRef from "./shRef";
import ShUseCall from "./shUseCall";
import ShMemo from "./shMemo";
import ShMy from "./shUseMy";
import ShContext from "./shContext";

function index() {
  return (
    <div>
      <h3>测试state</h3>
      <ShUseState />
      <h3>测试reducer</h3>
      <ShUserReducer />
      <h3>测试Ref</h3>
      <ShRef />
      <h3>测试memo</h3>
      <ShMemo />
      <h3>测试Callback</h3>
      <ShUseCall />
      <h3>测试自定义hooks</h3>
      <ShMy />
      <h3>测试Context</h3>
      <ShContext />
    </div>
  );
}

export default React.memo(index);
