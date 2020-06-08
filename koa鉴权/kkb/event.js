console.log('1, time = ' + new Date().toString())
setTimeout(macroCallback, 0);
new Promise(function (resolve, reject) {
    console.log('2, time = ' + new Date().toString())
    resolve();
    console.log('3, time = ' + new Date().toString())
}).then(microCallback);

function macroCallback() {
    console.log('4, time = ' + new Date().toString())
}

function microCallback() {
    console.log('5, time = ' + new Date().toString())
} 