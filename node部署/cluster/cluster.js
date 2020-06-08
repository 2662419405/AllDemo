var cluster = require('cluster');
var os = require('os'); // 获取CPU 的数量
var numCPUs = os.cpus().length;
var process = require('process')

console.log('numCPUs:', numCPUs)
var workers = {};
if (cluster.isMaster) {
    // 主进程分支
    cluster.on('death', function (worker) {
        // 当一个工作进程结束时，重启工作进程 delete workers[worker.pid];
        worker = cluster.fork();
        workers[worker.pid] = worker;
    });
    // 初始开启与CPU 数量相同的工作进程 
    for (var i = 0; i < numCPUs; i++) {
        var worker = cluster.fork();
        workers[worker.pid] = worker;
    }
} else {
    // 工作进程分支，启动服务器
    var app = require('./app');
    app.use(async (ctx, next) => {
        console.log('worker' + cluster.worker.id + ',PID:' + process.pid)
        next()
    })
    app.listen(3000);
}
// 当主进程被终止时，关闭所有工作进程
process.on('SIGTERM', function () {
    for (var pid in workers) {
        process.kill(pid);
    }
    process.exit(0);
});

require('./test')