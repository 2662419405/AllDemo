(async () => {

    const fs = require('fs')

    // const data = fs.readFileSync('./show.js')
    // console.log('data1', data)
    // console.log('data1', data.toString())

    // fs.readFile('./show.js', (err, data) => {
    //     console.log('data', data,data.toString)
    // })

    const { promisify } = require('util')
    const readFile = promisify(fs.readFile)
    // try {

        const data = await readFile('./sho1.js')
        console.log('data', data)
    // } catch (error) {
    //     console.log('err', error)
    // }

})()

process.on('exit', (code) => {
    console.log(`退出码: ${code}`);
});

process.on('error', (code) => {
    console.log(`EEEEEEEE: ${code}`);
});
