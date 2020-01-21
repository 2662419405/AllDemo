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
const { ServerToken,ClientToken } = require('./mongoose')

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

const OAuth = require('co-wechat-oauth')
const oauth = new OAuth(conf.appid, conf.appsecret,
    async function (openid) {
        return await ClientToken.getToken(openid)
    },
    async function (openid, token) {
        return await ClientToken.setToken(openid, token)
    }
)

/**
 * 生成用户URL
 */
router.get('/wxAuthorize', async (ctx, next) => {
    const state = ctx.query.id
    console.log('ctx...' + ctx.href)
    let redirectUrl = ctx.href
    redirectUrl = redirectUrl.replace('wxAuthorize', 'wxCallback')
    const scope = 'snsapi_userinfo'
    const url = oauth.getAuthorizeURL(redirectUrl, state, scope)
    console.log('url' + url)
    ctx.redirect(url)
})
/**
 * 用户回调方法
 */
router.get('/wxCallback', async ctx => {
    const code = ctx.query.code
    console.log('wxCallback code', code)
    const token = await oauth.getAccessToken(code)
    const accessToken = token.data.access_token
    const openid = token.data.openid
    console.log('accessToken', accessToken)
    console.log('openid', openid)
    ctx.redirect('/?openid=' + openid)
})
/**
 * 获取用户信息
 */
router.get('/getUser', async ctx => {
    const openid = ctx.query.openid
    const userInfo = await oauth.getUser(openid)
    console.log('userInfo:', userInfo)
    ctx.body = userInfo
})

/**
 * 获取JSConfig
 */
router.get('/getJsConfig',async ctx => {
    console.log('getJSSDK...',ctx.query)
    const res = await api.getJsConfig(ctx.query)
    ctx.body = res
})






app.use(router.routes()); /*启动路由*/
app.use(router.allowedMethods());
app.listen(3000);