const express = require('express');
const Vue = require('vue');
const app = express()
const renderer = require('vue-server-renderer').createRenderer()
const Fs = require('fs')

app.get('*',(req,res)=>{
    const url = req.url
    const app = new Vue({
        data(){
            return {
                url: `<div>你访问的是${url}</div>`
            }
        }
    })
    renderer.renderToString(app, (err, html) => {
        res.setHeader('Content-Type','application/json; charset=utf-8')
        if (err) {
            res.status(500).end('Internal Server Error')
            return
          }
        res.end(
            Fs.readFileSync('./index.template.html','urf-8')
        )
    })
})

app.listen(8888,()=>{
    console.log('服务器启动在8888端口上')
})