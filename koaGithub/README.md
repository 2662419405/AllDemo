# 学习koa

## 路由

* 原生koa实现路由
* 使用koa-router中间件

## 获取数据

* 使用GET获取数据

> 获取数据方式
1. 是从上下文中直接获取
请求对象ctx.query，返回如 { a:1, b:2 }
请求字符串 ctx.querystring，返回如 a=1&b=2
2. 是从上下文的request对象中获取
请求对象ctx.request.query，返回如 { a:1, b:2 }
请求字符串 ctx.request.querystring，返回如 a=1&b=2