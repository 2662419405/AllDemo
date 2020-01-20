const child_process = require('child_process');
require('./test.js')
const fork = []

for (var i = 0; i < 2; i++) {
    var worker_process = child_process.fork("app.js", [3000 + i]);

    worker_process.on('close', function (code) {
        console.log('子进程已退出，退出码 ' + code);
    });
    fork.push(worker_process)
}

process.on('SIGTERM', function () {
    fork.forEach(
        worker_process.kill()
    )
    process.exit(0);
});