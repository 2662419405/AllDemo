const Koa = require('koa');

// 创建一个Koa对象表示web app本身:
const app = new Koa();

// 对于任何请求，app将调用该异步函数处理请求：
app.use(async (ctx, next) => {
    console.log('ctx....')
    // 随机产生错误
    Math.random() > 0.9 ?  aaa() : '2'

    await next();
    ctx.response.type = 'text/html';
    ctx.response.body = '<h1>Hello, koa2!</h1>';
});

if (!module.parent) {
    app.listen(3000);
    console.log('app started at port 3000...');
} else {
    module.exports = app
}

