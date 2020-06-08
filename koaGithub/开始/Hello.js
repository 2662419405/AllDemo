const Koa = require('koa');
const app = new Koa();

app.use( async (ctx,next)=>{
    console.log(ctx)
    ctx.body = 'hello koa'
})

app.listen(4000,()=>{
    console.log('服务器启动在4000端口上')
})