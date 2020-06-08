const koa = require('koa');
const app = new koa();

app.use( async (ctx)=>{
    if(ctx.url === '/' && ctx.method === "GET" ){
        // 当GET请求时候返回表单页面
        let html = `
            <h1>koa2 request post demo</h1>
            <form method="POST" action="/">
            <p>userName</p>
            <input name="userName" /><br/>
            <p>nickName</p>
            <input name="nickName" /><br/>
            <p>email</p>
            <input name="email" /><br/>
            <button type="submit">submit</button>
            </form>
        `
        ctx.body = html
    }else if(ctx.url === '/' && ctx.method === "POST" ){
        let Data = await parsePostData(ctx)
        ctx.body = Data
    }else{
        ctx.body = '请求失败'
    }
} )

// 解析上下文里node原生请求的POST参数
function parsePostData( ctx ) {
    return new Promise((resolve, reject) => {
        try {
        let postdata = "";
        ctx.req.addListener('data', (data) => {
            postdata += data
        })
        ctx.req.addListener("end",function(){
            let parseData = parseQueryStr( postdata )
            resolve( parseData )
        })
        } catch ( err ) {
        reject(err)
        }
    })
}

// 将POST请求参数字符串解析成JSON
function parseQueryStr( queryStr ) {
    let queryData = {}
    let queryStrList = queryStr.split('&')
    console.log( queryStrList )
    for (  let [ index, queryStr ] of queryStrList.entries()  ) {
      let itemList = queryStr.split('=')
      queryData[ itemList[0] ] = decodeURIComponent(itemList[1])
    }
    return queryData
  }
  

app.listen(3000,()=>{
    console.log('服务器监听3000端口')
})