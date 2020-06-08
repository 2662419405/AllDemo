const koa = require('koa');
const chalk = require('chalk')
const log = contents => {
    console.log(chalk.red(contents))
}

// 模拟黑客网站
const app = new koa();
const static = require('koa-static')
app.use(static(__dirname + '/views'))

app.use(async (ctx, next) => {
    log('Hack...:'+ctx.url)
    await next()
})


module.exports = app