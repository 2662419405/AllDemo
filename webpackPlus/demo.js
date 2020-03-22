const add = require("./utils");
const Axios = require("axios"); //处理请求
const img = require("./img/timg.jpeg"); //处理img
import "./index.css"; // 处理css
import "./index.scss"; // 处理sass
import "./index.less"; // 处理less

const newImg = new Image();

newImg.src = img.default;
const root = document.querySelector("#root");
root.append(newImg);

function demo() {
  console.log(1);
}

Axios.get("/api").then(res => {
  console.log(res);
});

console.log(add(2, 3));

demo();
