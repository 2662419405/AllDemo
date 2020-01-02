const koa = require('koa');
const views = require('koa-views');
const app = new koa();
const path = require('path');

// 加载模板渲染
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

app.listen(3000,()=>{
    console.log('服务器运行在3000端口上')
})