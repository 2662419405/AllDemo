const Koa = require('koa');
const app = new Koa();

app.use( async (ctx,next)=>{
    const url = ctx.request.url;
    ctx.body = url
})

app.listen(4000,()=>{
    console.log('服务器启动在4000端口上')
})