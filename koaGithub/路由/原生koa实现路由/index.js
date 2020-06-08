const Koa = require('koa');
const app = new Koa();
const Fs = require('fs')

function render(view){
    return new Promise((resolve,reject)=>{
        let dom = `./view/${view}.html`
        Fs.readFile(dom,"binary",(err,data)=>{
            if(err){
                reject(err)
            }else{
                resolve(data)
            }
        })
    })
}

async function router(url){
    let route = '404';
    switch(url){
        case '/':
            route =  '/index' 
            break;
        case '/user':
            route =  'user'
            break;
        case '/two':
            route =  'two'
            break;
        default:
            break;
    }
    let html = await render(route)
    return html
}

app.use( async (ctx,next)=>{
    const url = ctx.request.url
    const html = await router(url)
    ctx.body = html
} )

app.listen(5000,()=>{
    console.log('服务器运行在5000端口上')
})