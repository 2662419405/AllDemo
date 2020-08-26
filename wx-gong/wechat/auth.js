/**
 * 验证服务器
 */
const sha1 = require('sha1')
const config = require('../config/config')

module.exports = () => {
  return (req, res, next) => {
    const { signature, timestamp, nonce, echostr } = req.query
    const { token } = config
    const mySign = sha1([timestamp, token, nonce].sort().join(''))
    if (mySign === signature) {
      res.send(echostr)
    } else {
      res.end('error')
    }
  }
}
