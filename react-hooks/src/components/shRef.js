import React, { useRef, useEffect } from "react";

export default () => {
  const inputRef = useRef();
  useEffect(() => {
    inputRef.current.focus();
  });
  return (
    <div>
      <input ref={inputRef} type="text" placeholder="自动获取焦点" />
    </div>
  );
};
