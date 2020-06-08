var request = require('request');
setInterval(() => {
    request('http://localhost:3000', function (error, response, body) {
        console.log(body)//打印百度首页html内容
    })
}, 1000)

