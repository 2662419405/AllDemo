import React, { useReducer } from "react";

function fruitReducer(state, action) {
  switch (action.type) {
    case "add":
      return { ...state, num: state.num + 1 };
    case "del":
      return { ...state, num: state.num - 1 };
    default:
      return state;
  }
}

const ShUserReducer = (props) => {
  const [fruit, action] = useReducer(fruitReducer, { num: 0 });
  return (
    <div>
      {fruit.num}
      <button onClick={() => action({ type: "add" })}>+1</button>
      <button onClick={() => action({ type: "del" })}>-1</button>
    </div>
  );
};

export default ShUserReducer;
