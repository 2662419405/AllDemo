const Koa = require('koa')
const app = new Koa()
app.use(ctx => {
    Math.random() > 0.8 ? abc() : ''
    ctx.body = 'Hello Docker'
})
app.listen(3000, () => {
    console.log('app started at http://localhost:3000/')
})