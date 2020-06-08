const Koa = require('koa')
const Router = require('koa-router')

const app = new Koa()
const router = new Router()

// 静态文件
const static = require('koa-static')
app.use(static(__dirname + '/'))
const conf = require('./conf')
const wechat = require('co-wechat')

// socket.io
const IO = require('koa-socket')
const io = new IO()
io.attach(app)
app._io.on('connection',socket => {
    console.log('socket connection..')
})
// setInterval(() => {
//     console.log(123)
//     const msg = {
//         FromUserName : '111',
//         Content: Math.random() > 0.1 ? '1':'2'
//     }
//     app._io.emit('chat',msg)
// },1000)

// 消息接口
router.all('/wechat', wechat(conf).middleware(
    async (message, ctx) => {
        console.log('wechart', message)
        app._io.emit('chat',message)
        return '收到！';
    }
))

app.use(router.routes()); /*启动路由*/
app.use(router.allowedMethods());
app.listen(3000);