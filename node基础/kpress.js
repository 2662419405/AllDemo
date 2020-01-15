const http = require('http')
const url = require('url')

let router = []

class Application {
    get(path, handler) {
        router.push({
            path,
            method: 'get',
            handler
        })
    }
    listen() {
        const server = http.createServer((req, res) => {
            const { pathname } = url.parse(req.url, true)
            // for (const item of router) {
            //     const { path, method, handler } = item
            //     if (pathname == path && req.method.toLowerCase() == method) {
            //         return handler(req, res)
            //     }
            // }
            return router
                .find(v => pathname === v.path && req.method.toLowerCase() == v.method)
                .handler(req,res)
        })
        server.listen(...arguments)
    }
    
}
module.exports = function createApplication(){
    return new Application()
}