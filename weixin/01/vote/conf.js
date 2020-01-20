module.exports = 
process.env.NODE_ENV === 'production' ?
{
    appid: 'wx3a1a04af59190548',
    appsecret: 'b6253908f8c3c56fcad2359978c0f69a',
    token: 'kaikeba',
    encodingAESKey: 'EnWTNZiEz0LmBG3fyuPiTnyQx3MNBMyTBkFl6JbHlW4',
    port: 3000,
}
:
{
    appid: 'wxfc60e88fa8622c69',
    appsecret: '23c57e17b4073db7d03cca2ebac525ae',
    token: 'kaikeba',
    port: 3000,
}
;