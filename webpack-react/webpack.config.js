const dev = require('./webpack.config.dev.js');
const prod = require('./webpack.config.prod.js');
//运行npm run 命令时，获取package.json中的配置命令键名
// "scripts": {
//   "dev": "npx webpack-dev-server --open",
//   "start": "npm run dev",
//   "build": "npx webpack --mode=production"
// },
const TARGET = process.env.npm_lifecycle_event;
console.log("TARGET",TARGET);
if(TARGET === 'dev') {
  module.exports = dev
}

if(TARGET === 'build') {
  module.exports = prod
}