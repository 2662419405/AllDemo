const koa = require('koa');
const app = new koa();

app.use( async (ctx) =>{
    const url = ctx.request.url;
    const params = ctx.query;
    const params_query = ctx.querystring

    const query_params = ctx.request.querystring;
    const querystring = ctx.request.query

    ctx.body = {
        url,
        params,
        params_query,
        query_params,
        querystring
    }
} )

app.listen(4100,()=>{
    console.log('服务器监听4100端口')
})