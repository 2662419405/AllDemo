// jsonwebtoken.js

const jsonwebtoken = require('jsonwebtoken')
const secret = '12345678'
const opt = {
  secret: 'jwt_secret',
  key: 'user'
}
const user = {
  username: 'abc',
  password: '111111'
}

const token = jsonwebtoken.sign({
  data: user,
  // 设置 token 过期时间
  exp: Math.floor(Date.now() / 1000) + (60 * 60), 
}, secret)

console.log('生成token:' + token)
// 生成token:eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7InVzZXJuYW1lIjoiYWJjIiwicGFzc3dvcmQiOiIxMTExMTEifSwiZXhwIjoxNTQ2OTQyMzk1LCJpYXQiOjE1NDY5Mzg3OTV9.VPBCQgLB7XPBq3RdHK9WQMkPp3dw65JzEKm_LZZjP9Y
console.log('解码:', jsonwebtoken.verify(token, secret, opt))
// 解码: { data: { username: 'abc', password: '111111' },
//  exp: 1546942395,
//  iat: 1546938795 }