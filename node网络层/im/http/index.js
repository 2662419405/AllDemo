const express = require('express')
const app = express()
const http = require('http').Server(app)

const bodyParser = require('body-parser');
const path = require('path')

app.use(bodyParser.json());

const list = ['ccc', 'ddd']

app.get('/', (req, res) => {
    res.sendFile(path.resolve('./index.html'))
})

app.get('/list', (req, res) => {
    res.end(JSON.stringify(list))
})

app.post('/send', (req, res) => {
    list.push(req.body.message)
    res.end(JSON.stringify(list))
})

app.post('/clear', (req, res) => {
    list.length = 0
    res.end(JSON.stringify(list))
})

app.listen(3000); 