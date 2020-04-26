import React, { useState, useRef } from "react";

const ShUseState = (props) => {
  const [count, setCount] = useState(0);
  const countRef = useRef(count);

  const changeHandlerCount = () => {
    setCount(count + 1);
    console.log(countRef.current);
  };

  return (
    <div>
      {count}
      <button onClick={changeHandlerCount}>更新state</button>
    </div>
  );
};

export default ShUseState;
