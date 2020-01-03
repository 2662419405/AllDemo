const Vue = require('vue');
const app = new Vue({
    template: `<div>我是应该vue实例</div>`
})

const renderer = require('vue-server-renderer').createRenderer()

renderer.renderToString(app,(err,html)=>{
    if(err) throw err;
    console.log(html) 
    // <div data-server-rendered="true">我是应该vue实例</div>
})

// 在 2.5.0+，如果没有传入回调函数，则会返回 Promise：
renderer.renderToString(app).then(html => {
    console.log(html)
  }).catch(err => {
    console.error(err)
})