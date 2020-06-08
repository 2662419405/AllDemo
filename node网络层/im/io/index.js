const express = require('express')
const app = express()
const server = require('http').createServer(app)
const io = require('socket.io')(server)
io.on('connection', (socket) => {
    console.log('io connection ..')
    socket.on('chat', (msg) => {
    });
});

const bodyParser = require('body-parser');
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', express.static(__dirname + '/'));

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("X-Powered-By",' 3.2.1')
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
})

const list = ['ccc', 'ddd']
app.get('/list', (req, res) => {
    res.end(JSON.stringify(list))
})

app.post('/send', (req, res) => {
    list.push(req.body.message)

    // // SocketIO
    io.emit('chat', list)

    res.end(JSON.stringify(list))
})

app.post('/clear', (req, res) => {
    list.length = 0
    res.end(JSON.stringify(list))
})
server.listen(3000); 