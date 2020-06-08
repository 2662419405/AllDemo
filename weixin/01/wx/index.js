const Koa = require('koa')
const Router = require('koa-router')
const static = require('koa-static')
const bodyParser = require('koa-bodyparser');
const app = new Koa()
const conf = require('./conf')
app.use(bodyParser())
const router = new Router()
app.use(static(__dirname + '/'))
const axios = require('axios')

const wechat = require('co-wechat')
router.all('/wechat', wechat(conf).middleware(
    async message => {
        console.log('wechat:', message)
        return 'Hello World ' + message.Content
    }
))

// const tokenCache = {
//     access_token:'',
//     updateTime:Date.now(),
//     expires_in:7200
// }

// router.get('/getTokens',async ctx => {
//     const wxDomain =  `https://api.weixin.qq.com`
//     const path = `/cgi-bin/token`
//     const param = `?grant_type=client_credential&appid=${conf.appid}&secret=${conf.appsecret}`
//     const url = wxDomain + path + param
//     const res = await axios.get(url)
//     Object.assign(tokenCache,res.data,{
//         updateTime:Date.now()
//     })
//     ctx.body = res.data
// })

// router.get('/getFollowers',async ctx => {
//     const url = `https://api.weixin.qq.com/cgi-bin/user/get?access_token=${tokenCache.access_token}`
//     const res = await axios.get(url)
//     console.log('getFollowers:',res)
//     ctx.body = res.data
// })
const { ServerToken } = require('./mongoose')

const WechatAPI = require('co-wechat-api')
const api = new WechatAPI(
    conf.appid,
    conf.appsecret,
    // 取Token
    async () => await ServerToken.findOne(),
    // 存Token
    async token => await ServerToken.updateOne({}, token, { upsert: true })
)
router.get('/getFollowers', async ctx => {
    let res = await api.getFollowers()
    res = await api.batchGetUsers(res.data.openid, 'zh_CN')
    ctx.body = res
})



app.use(router.routes()); /*启动路由*/
app.use(router.allowedMethods());
app.listen(3000);