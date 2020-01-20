const Koa = require('koa')
const Router = require('koa-router')
const static = require('koa-static')
const bodyParser = require('koa-bodyparser');
const app = new Koa()
app.use(bodyParser())
const router = new Router()
app.use(static(__dirname + '/'))

app.use(router.routes()); /*启动路由*/
app.use(router.allowedMethods());
app.listen(3000);