## antd按需加载的坑

1. 安装需要的依赖

`npm i react-app-rewired@2.0.2-next.0 babel-plugin-import `

2. 配置启动脚本

```js
/* package.json 的配置需要做如下修改*/
"scripts": {
-   "start": "react-scripts start",
+   "start": "react-app-rewired start",
-   "build": "react-scripts build",
+   "build": "react-app-rewired build",
-   "test": "react-scripts test --env=jsdom",
+   "test": "react-app-rewired test --env=jsdom",
}
```

3. 配置文件,在根目录生成一个`config-overrides.js`

```js
const {
  override,
  fixBabelImports,
  addLessLoader,
} = require("customize-cra");
 
 
module.exports = override(
  fixBabelImports("import", {
    libraryName: "antd", libraryDirectory: "es", style: true // change importing css to less
  }),
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: { "@primary-color": "#1DA57A" }
  })
);
```

* 安装react-router
* 安装react-redux
* 安装redux