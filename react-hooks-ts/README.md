# 配置antd的按需加载

安装依赖 `npm i react-app-rewired@2.0.2-next.0 babel-plugin-import customize-cra`

修改`package.json`

```json
"scripts": {
    "start": "react-app-rewired start",
    "build": "react-app-rewired build",
    "test": "react-app-rewired test",
    "eject": "react-app-rewired eject"
},
```

在根目录创建`config-overrides.js`

```js
const { override, fixBabelImports, addLessLoader } = require("customize-cra");

module.exports = override(
  fixBabelImports("import", {
    libraryName: "antd",
    libraryDirectory: "es",
    style: true // change importing css to less
  }),
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: { "@primary-color": "#1890ff" }
  })
);
```

# 配置ts

安装
`yarn add -D typescript`
`yarn add tslib`

```yml
# 为项目创建 tsconfig.json ，使用默认编译设置
yarn tsc --init
```
