const express = require('express')
const auth = require('./wechat/auth')

const app = express()

// 验证服务器是否有效
app.use(auth())

// 启动服务器在3000端口上
app.listen(3000, () => {
  console.log('服务器启动在3000端口上')
})
