
const app = require('./app/app')
const hack = require('./hack/app')
const chalk = require('chalk')

app.listen(3000, () => {
    console.log('正常网站启动成功:'+3000);
});
hack.listen(4000, () => {
    console.log(chalk.red('黑客网站启动成功:'+4000));
});