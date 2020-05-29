import React, { useState } from "react";
import Model from "./Model";

export default function Portals() {
  const [show, setShow] = useState(false);
  return (
    <div>
      <br />
      <br />
      <br />
      <h3>Portals</h3>
      <button onClick={() => setShow(!show)}>弹出消息框</button>
      {show && <Model>123</Model>}
    </div>
  );
}
