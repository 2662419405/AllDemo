const express = require("express");
const qiniu = require("qiniu");
const config = require("./config");
const app = express();

//设置允许跨域访问该服务.
app.all("*", function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  //Access-Control-Allow-Headers ,可根据浏览器的F12查看,把对应的粘贴在这里就行
  res.header("Access-Control-Allow-Headers", "Content-Type");
  res.header("Access-Control-Allow-Methods", "*");
  res.header("Content-Type", "application/json;charset=utf-8");
  next();
});

/**
 * 获取鉴权对象
 */
var accessKey = config.accessKey;
var secretKey = config.secretKey;
var mac = new qiniu.auth.digest.Mac(accessKey, secretKey);

app.get("/file", function (req, res) {
  const putPolicy = new qiniu.rs.PutPolicy({
    scope: config.scope,
    expires: 7200,
  });
  res.send(putPolicy.uploadToken(mac));
});

app.listen(3000, () => {
  console.log("服务器启动在3000端口上");
});
