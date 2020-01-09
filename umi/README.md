# umi使用

## 路由使用

* 基础路由 src下面的js文件
  
* 动态路由 有$开头的文件会生成动态路由 { path: "/user/:id", component: "xxx" }

* 可选的动态路由 有$结尾的文件会生成为可选动态路由 { path: "/users/:id?", component: "xxx" }

* 嵌套路由,在当前文件夹下面,创建一个_layout.js就会生成嵌套路由
