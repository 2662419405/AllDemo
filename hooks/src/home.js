import React, { useState, useEffect } from "react";
import Child from "./components/child";

function Home() {
  const [title, setTitle] = useState("我是title");

  // 相当于 componentDidMount 和 componentDidUpdate:
  useEffect(() => {
    // 使用浏览器的 API 更新页面标题
    document.title = `You clicked ${title} times`;
  });

  return (
    <div>
      我是首页组件
      <br />
      {title}
      <br />
      <button onClick={() => setTitle("点完我")}>点击我</button>
      <Child name="子组件" />
    </div>
  );
}

export default Home;
