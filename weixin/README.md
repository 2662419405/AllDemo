# 微信开发

## 测试跑通

1. 使用sunny-ngrok搭建本地环境

```js
//启动多个sunny
sunny.exe clientid 隧道id,隧道id
```

## 验证加密

1. 会收到这四样内容

```js
signature, // 微信加密签名，signature结合了开发者填写的token参数和请求中的timestamp参数、nonce参数。
timestamp, // 时间戳
nonce, // 随机数 
echostr // 随机字符串
```

token + timestamp + nonce 进行sha1算法之后,和signature做对比,如果一致则代表微信验证成功

