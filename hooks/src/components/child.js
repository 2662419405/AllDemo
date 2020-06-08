import React from "react";

function child(props) {
  console.log(props.name);
  return <h1>{props.name}</h1>;
}

export default React.memo(child); //React.memo是性能优化点
