const express = require("express");

const app = express();

app.get("/api/info", (req, res) => {
  res.json({
    name: "开课吧",
    age: 5,
    msg: "欢迎来到开课吧学习前端高级课程"
  });
});

app.listen("9092");
