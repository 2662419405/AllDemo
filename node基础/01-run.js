
const {showCpu,showMem} = require('./show')
setInterval(() => {
    showCpu()
    showMem()
     
},1000)

// function show() {
//     const mem = os.freemem() / os.totalmem() * 100;
//     console.log(`内存占用率${mem.toFixed(2)}`);
//     const cpuStat = require('cpu-stat');
//     cpuStat.usagePercent((err, percent) => {
//         console.log(`cpu占用率：${percent.toFixed(2)}`);
//     });
// }
