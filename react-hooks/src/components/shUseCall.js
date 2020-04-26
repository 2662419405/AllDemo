import React, { useState, useMemo, useCallback, useEffect } from "react";

function Child(props) {
  console.log("Parent数据有变化都会进来");
  const [count, setCount] = useState(() => props.callback());
  useEffect(() => {
    console.log("callback变化的时候才会再次执行setCount");
    setCount(props.callback());
  }, [props.callback]);
  return <div>{count}</div>;
}

export default function Parent() {
  const [count, setCount] = useState(1);
  const [val, setVal] = useState("");

  /** 类似于useMemo函数，useCallback用户跨组件 */
  const callback = useCallback(() => {
    return count;
  }, [count]);

  return (
    <div>
      <h4>{count}</h4>
      <h4>{val}</h4>
      <Child callback={callback} />
      <div>
        <button onClick={() => setCount(count + 1)}>+</button>
        <input value={val} onChange={(event) => setVal(event.target.value)} />
      </div>
    </div>
  );
}
