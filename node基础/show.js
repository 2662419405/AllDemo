const os = require('os')
module.exports.showMem = () => {
    const mem = os.freemem() / os.totalmem() * 100;
    console.log(`内存占用率${mem.toFixed(2)}`);

}
module.exports.showCpu = () => {
    const cpuStat = require('cpu-stat');
    cpuStat.usagePercent((err, percent) => {
        console.log(`cpu占用率：${percent.toFixed(2)}`);
    });
}