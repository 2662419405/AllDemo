import React, { useState, Fragment } from "react";
import Child from "./child";
import { CountContext } from "./context";

export default () => {
  const [count, setCount] = useState(0);
  return (
    <Fragment>
      {count}
      <button onClick={() => setCount(count + 1)}>+1</button>
      <CountContext.Provider value={count}>
        <Child />
      </CountContext.Provider>
    </Fragment>
  );
};
