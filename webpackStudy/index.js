import a from "./a";
import b from "./b";
import axios from "axios";

import pic from "./img/timg.jpeg";
import "./index.css";

var img = new Image();
img.src = pic;
img.classList.add("pic");
var root = document.querySelector("#root");
root.append(img);

console.log(pic);

//既然webpack默认只认识js模块，那么遇到非js模块该怎么办？
//loader
a();
b();

axios.get("/api/info").then(res => {
  console.log(res);
});
function kkb() {
  console.log("welcome to webpack");
}

kkb();
