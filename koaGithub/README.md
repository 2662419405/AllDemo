# 学习koa

## 路由

* 原生koa实现路由
* 使用koa-router中间件

## 获取数据

* 使用GET获取数据

> 获取数据方式
1. 是从上下文中直接获取
请求对象ctx.query，返回如 { a:1, b:2 }
请求字符串 ctx.querystring，返回如 a=1&b=2
2. 是从上下文的request对象中获取
请求对象ctx.request.query，返回如 { a:1, b:2 }
请求字符串 ctx.request.querystring，返回如 a=1&b=2

* 使用POST获取数据

* 使用koa-bodyparser中间件

## 静态资源的加载

* 使用koa-static加载
`app.use(static(path.join(__dirname,staticPath)))`

## cookie/session

* ctx.cookies.get(name, [options]) 读取上下文请求中的cookie
* ctx.cookies.set(name, value, [options]) 在上下文中写入cookie

## koa2和koa-view模板渲染

```js
app.use(views(path.join(__dirname,'./view'),{
    extension: 'ejs'
}))

app.use( async (ctx)=>{
    let title = '我是koa渲染模板';
    let arr = ['java','php']
    await ctx.render('index',{
        title,
        arr
    })
} )
```

## 文件上传