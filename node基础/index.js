// const express = require('express')
const express = require('./kpress')
const app = express()
app.get('/',(req,res) => {
    res.end('Hello world')
})
app.get('/users',(req,res) => {
    res.end(JSON.stringify({name:'abc'}))
})
app.listen(3000 , () => {
    console.log('Example listen at 3000')
})