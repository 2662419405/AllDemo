var http = require('http');
setInterval(async () => {
    try {
        await http.get('http://localhost:3000');
        console.log('go')
    } catch (error) {
    }
}, 1000)