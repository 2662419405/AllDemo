const Koa = require('koa');
const app = new Koa();

app.use( async (ctx)=>{
    ctx.set('cache-control','max-age=7776000');
    ctx.set("ETag",'5c20abbd-e2e8');
    ctx.set('last-modified'," Mon, 24 Dec 2018 09:49:49 GMT")
    ctx.body = '1'
} )

app.listen(8888,()=>{
    console.log('服务器启动成功')
})