const EventEmitter = require('events').EventEmitter; 
const event = new EventEmitter(); 
event.on('some_event', num =>  { 
    console.log('some_event 事件触发:'+num); 
}); 
let num = 0
setInterval(() =>  { 
    event.emit('some_event' , num ++ ); 
}, 1000); 
