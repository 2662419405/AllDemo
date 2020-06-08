const http = require('http')
const fs = require('fs')
const server = http.createServer((request, response) => {
    const { url, method, headers } = request
    console.log('this is a request', request.url,headers.accept)
    if (url === '/' && method === 'GET') {
        fs.readFile('index.html', (err, data) => {
            if (err) {
                response.writeHead(500, { 'Content-Type': 'text/pain;charset=utf-8' })
                response.end('服务器错误')
            }
            response.statusCode = 200
            response.setHeader('Content-Type', 'text/html')
            response.end(data)
        })
    } else if (url == '/users' && method === 'GET') {
        response.statusCode = 200
        response.setHeader('Content-Type', 'text/html')
        response.end(JSON.stringify({ a: 123 }))
    } else if (method == 'GET' && headers.accept.indexOf('image/*') !== -1) {
        
        fs.createReadStream('.' + url).pipe(response)
    }
    else {
        response.statusCode = 404
        response.setHeader('Content-Type', 'text/plain;charset=utf-8')
        response.end('No Page 页面不存在')
    }


    // response.end('a response...')
})
server.listen(3000)