import React, { useContext } from "react";
import { CountContext } from "./context";

export default () => {
  const count = useContext(CountContext);
  return <div>{count},我是子组件</div>;
};
