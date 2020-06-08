import React from "react";

const Hide = Can => props => {
  return (
    <div style={{ border: "1px solid red" }}>
      <Can {...props} />
    </div>
  );
};

export default Hide;
