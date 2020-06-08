var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
  console.log('a user connected');
  
  //响应某用户发送消息
  socket.on('chat message', function(msg){
      console.log('chat message:' + msg);
      
    // 广播给所有人
    io.emit('chat message', msg);
    // 广播给除了发送者外所有人
    // socket.broadcast.emit('chat message', msg)
  });  

  socket.on('disconnect', function(){
    console.log('user disconnected');
  });
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});