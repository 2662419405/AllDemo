const Koa = require('koa')
const Router = require('koa-router')
const bodyParser = require('koa-bodyparser')
const querystring = require('querystring')
const router = new Router()
const app = new Koa()
const compress = require('koa-compress');
const options = {
    threshold: 2048
};
app.use(compress(options));
app.use(bodyParser())
const conf = require('./conf')
const {
    Quiz,
    ClientToken,
    ServerToken,
} = require('./mongo')

// 静态文件
const static = require('koa-static')
app.use(static('../cube-ui/dist'))

const jsonwebtoken = require('jsonwebtoken')
const jwt = require('koa-jwt')
const secret = 'hello123'
app.use(jwt({
    secret
})
    .unless({
        path: [/\/wxAuthorize/, /\/wxCallback/]
    }))

const WechatAPI = require('co-wechat-api');
const api = new WechatAPI(conf.appid, conf.appsecret);
const OAuth = require('co-wechat-oauth');
const oauth = new OAuth(conf.appid, conf.appsecret,
    //     function (openid, callback) {
    //     // 传入一个根据openid获取对应的全局token的方法
    //     // 在getUser时会通过该方法来获取token
    //     ClientToken.getToken(openid, callback);
    // }, function (openid, token, callback) {
    //     // 持久化时请注意，每个openid都对应一个唯一的token!
    //     ClientToken.setToken(openid, token, callback);
    // }
);
router.get('/wxAuthorize', async (ctx, next) => {
    const state = ''
    // const target = ctx.href
    console.log('ctx...' + ctx.href)

    // 目标地址
    redirectUrl = ctx.href.replace('wxAuthorize', 'wxCallback')
    redirectUrl = redirectUrl.replace(':8000', '')
    const scope = 'snsapi_userinfo'
    console.log('redirectUrl:', redirectUrl)
    const url = oauth.getAuthorizeURL(redirectUrl, state, scope);
    console.log('url:' + url)
    ctx.redirect(url)
})

// 获取 Openid 和 AccessToken
router.get('/wxCallback', async (ctx, next) => {

    console.log('wxCallback', ctx.query)
    const {
        code,
        openid
    } = ctx.query
    const token = await oauth.getAccessToken(code);
    const sign = jsonwebtoken.sign({
        data: token,
        // 设置 token 过期时间
        exp: Math.floor(Date.now() / 1000) + (60 * 60), // 60 seconds * 60 minutes = 1 hour
    }, secret)
    const qs = querystring.stringify({
        token: sign,
        openid
    })
    const url = `/index.html?${qs}`
    ctx.redirect(url)
})

// 保存用户数据
router.post('/saveData', ctx => {
    const {
        openid
    } = ctx.state.user.data.data
    Quiz.save(openid, ctx.request.body.data, () => {
        ctx.body = require('./data')
    })
    ctx.body = {
        status: true
    }
})

// 获取用户数据
router.get('/getData', async ctx => {
    try {
        const {
            openid
        } = ctx.state.user.data
        const {
            data
        } = await Quiz.get(openid);
        if (data === null || data.length === 0) {
            throw new Error()
        } else {
            ctx.body = data
        }
    } catch (error) {
        ctx.body = require('./data')
    }
})

router.get('/getUser', async ctx => {
    const { openid } = ctx.state.user.data.data
    console.log('state ...',ctx.state.user)

    const userInfo = await oauth.getUser(openid)
    console.log('userInfo:',userInfo)
    ctx.body = userInfo

})

router.get('/getJsConfig',async ctx => {
    const res = await api.getJsConfig(ctx.query)
    ctx.body = res
})


app.use(router.routes()); /*启动路由*/
app.use(router.allowedMethods());
app.listen(3000);