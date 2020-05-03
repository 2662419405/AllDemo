import React from "react";
import Images from "./assets/home.jpg";

const delay = new Promise((resolve) => console.log("new Promise()"));
delay.then((res) => {
  console.log(1);
});

const App = () => {
  return (
    <p>
      1wd
      <img src={Images} />
    </p>
  );
};

export default App;
