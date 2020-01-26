const path = require("path");

module.exports = {
  //指定打包的入口文件
  entry: "./index.js",
  //指定打包后的资源位置
  output: {
    path: path.resolve(__dirname, "./build"),
    filename: "kkb.js"
  }
};
