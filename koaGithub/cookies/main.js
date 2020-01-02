const Koa = require('koa')
const app = new Koa()

app.use( async ( ctx ) => {

  if ( ctx.url === '/index' ) {
  
    }
})

app.listen(3000,()=>{
    console.log('服务器运行在3000端口上')
})