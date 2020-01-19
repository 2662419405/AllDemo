const Koa = require("koa");
const app = new Koa();
const mongoose = require('./models/mongoose')
const getVip = require('./middleware/get-vip')

app.use(async (ctx, next) => {
    try {
        await next();
    } catch (error) {
        // 响应用户
        ctx.status = error.statusCode || error.status || 500;
        ctx.body = error.message;

        // 触发应用层级错误事件
        ctx.app.emit("error", error, ctx);
        console.log('捕获到错误：', error.message);
    }
});

// 静态服务
const static = require("koa-static");
app.use(static(__dirname + '/public'));

app.use(getVip)

// 响应时间输出中间件
app.use(async (ctx, next) => {
    await next();
    // 获取响应头，印证执行顺序
    const rt = ctx.response.get('X-Response-Time');
    console.log(`输出计时：${ctx.method} ${ctx.url} - ${rt}`);
});

// 响应时间统计中间件
app.use(async (ctx, next) => {
    const start = Date.now();
    console.log('开始计时');
    await next();
    const ms = Date.now() - start;
    ctx.set('X-Response-Time', `${ms}ms`);
    console.log('计时结束');
});

// const sleep = time => new Promise(resolve => setTimeout(resolve, time))
// 响应
// app.use(async ctx => {
//     console.log('响应用户请求');
//     await sleep(1000)
//     ctx.status = 200; // 设置响应状态码
//     ctx.type = 'html'; // 设置响应类型，等效于ctx.set('Content-Type','text/html')
//     ctx.body = "<h1>Hello Koa</h1>"; //设置响应体
// });




const hbs = require('koa-hbs')
const helpers = require('./utils/helpers')
app.use(hbs.middleware({
    viewPath: __dirname + '/views', //视图根目录
    defaultLayout: 'layout', //默认布局页面
    partialsPath: __dirname + '/views/partials', //注册partial目录
    disableCache: true //开发阶段不缓存
}));

const index = require('./routes/index');
const users = require('./routes/users');
app.use(index.routes());
app.use(users.routes());






app.on('error', (err, ctx) =>{
    console.error(err);
    // console.log('没得事')
    // throw err
})




//开始监听端口，等同于http.createServer(app.callback()).listen(3000);
app.listen(3000);