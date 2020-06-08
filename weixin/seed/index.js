const Koa = require('koa')
const Router = require('koa-router')
const static = require('koa-static')
const bodyParser = require('koa-bodyparser');
const app = new Koa()
app.use(bodyParser())
const router = new Router()
const conf = require('./config')
app.use(static(__dirname + '/'))

const wechat = require('co-wechat')
router.all('/weixin', wechat(conf).middleware(
    async message => {
        console.log('wechat:', message)
        return 'Hello World ' + message.Content
    }
))

app.use(router.routes()); /*启动路由*/
app.use(router.allowedMethods());
app.listen(3000);