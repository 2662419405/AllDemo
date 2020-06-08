const http = require("http");
const fs = require("fs");

http
    .createServer((req, res) => {
        const { method, url } = req;
        console.log('method:', method)

        console.log('cookie', req.headers.cookie)
        if (method == "GET" && url == "/") {
            fs.readFile("./index.html", (err, data) => {
                res.setHeader("Content-Type", "text/html");
                res.end(data);
            });
        } else if ((method == "GET" || method == "POST") && url == "/users") {
            res.setHeader("Content-Type", "application/json");
            setHeader(res);

            res.setHeader('Set-Cookie', 'cookie1=va222;')
            res.end(JSON.stringify([{ name: "tom", age: 20 }]));
        } else if (method == "OPTIONS" && url == "/users") {
            setHeader(res);
            res.end();
        }
    })
    .listen(3000);

function setHeader(res) {
    res.setHeader('Access-Control-Allow-Origin', 'http://127.0.0.1:8080')
    res.setHeader('Access-Control-Allow-Headers', 'X-Token,Content-Type')
    res.setHeader('Access-Control-Allow-Credentials', 'true');
}
