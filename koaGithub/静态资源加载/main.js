const Koa = require('koa');
const app = new Koa();
const fs = require('fs');
const static = require('koa-static');
const path = require('path');

const staticPath = "./static";

app.use(static(path.join(__dirname,staticPath)))

app.use( async (ctx)=>{
    if(ctx.url === '/' && ctx.method === "GET"){
        let html = fs.readFileSync('./index.html');
        ctx.type = 'text/html;charset=urf-8';
        ctx.body = html
    }
})

app.listen(3000,()=>{
    console.log('服务器启动在3000端口上')
})