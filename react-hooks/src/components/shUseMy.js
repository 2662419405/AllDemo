import React from "react";
import useHooksDemo from "../hooks/useHookDemo";

export default function ShUseMy() {
  const position = useHooksDemo();
  return (
    <div>
      x:{position.x},y:{position.y}
    </div>
  );
}
