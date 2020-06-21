<div align="center">

# 全栈学习 Demo 大合集

</div>

> 说明: :100: 本项目包含常用的技术点和技术栈,时间为 2020 年度最新的技术栈,大范围的包含(Vue,Vuex,SSR,vue 源码解析,vue 实战,vue 单元测试,ts,React 入门,react 全家桶,react 组件,react 源码解析,redux,react-router,node 基础,node 网络编程,node 持久化 mysql,node 持久化 mongodb,node 部署,pm2,koa 实战,微信小程序,网络安全,RN,Flutter,webpack,微信公众号,自动化测试,前端性能优化,数据结构算法),包含小的 html,css,js 的设计模式等方向,**数据可视化(最新增加)**

- 选择哪个 Demo,都需要进入对应的目录下面安装 `yarn` or `npm i`

## 基础篇

1. 文字文本溢出解决方案 -> [文本溢出](/base/wen/index.html)
2. 图片预加载 -> [预加载](/base/yu/index.html) vue 版本图片[预加载](/base/yu/index.vue)
3. 手写一个 new -> [new](/base/new/index.html)
4. 手写一个深拷贝 -> [深拷贝](/base/shen/index.html)
5. 模拟订阅发布模式(观察者) -> [订阅发布](/base/ding/index.html)
6. 玩转 Flex 布局 -> [Flex](/base/flex/index.html)
7. 函数柯里化 -> [柯里化](/base/ke/index.js)
8. 实现 mergePromise 函数，把传进去的数组顺序先后执行 [mergePromise](/base/mergePromise/index.js)
9. 图片上传操作七牛云 [图片上传](/base/file/README.md)
10. localStorage 的过期时间处理 [localStorage 过期](/base/localStorge/index.js)

## 数据可视化学习

1. canvas 验证码 [验证码](/data/canvas)
2. svg 矢量图绘制 [svg](/data/svg/index.html)
3. zender [zender](/data/zender/index.html)
4. canvas 进行 img 图片压缩 [图片压缩](/data/canvasCompressImg/index.html)
5. G2 绘图 [G2](/data/G2/g2.html)
6. G6 绘图 [G6](/data/G6/g6.html)
7. I7 地图编写 [I7](/data/I7/I7.html)
8. echarts **全部 echarts 案例** [echarts](/data/echarts/index.html)

## 实战篇

| 名称                     |                        源码                        |                                                                  线上网址 |                       技术栈 |
| ------------------------ | :------------------------------------------------: | ------------------------------------------------------------------------: | ---------------------------: |
| 美团 PC 端               |   [源码](https://github.com/2662419405/meituan)    |                                           [线上](http://mt.shtodream.cn/) | 原生 React+antd+Koa+mongoose |
| 美团移动端(推荐)         |  [源码](https://github.com/2662419405/meituanAn)   |                                        [线上](http://react.shtodream.cn/) |    umi+dva+antd+Koa+mongoose |
| 美团后台                 | [源码](https://github.com/2662419405/meituanBack)  |                                     [线上](http://vue.shtodream.cn/login) | vue+nuxt+elment+Koa+mongoose |
| 饿了么多端开发           | [源码](https://github.com/2662419405/meituan-taro) |                                         [线上](http://taro.shtodream.cn/) |                 taro+taro-ui |
| 饿了么微信小程序         |  [源码](https://github.com/2662419405/meituanWx)   |                                                                      暂无 |               原生微信小程序 |
| 后台管理系统 (力荐)      | [源码](https://github.com/2662419405/react_admin)  |                                         [线上](http://hooks.shtodream.cn) |           TS + Hooks + Redux |
| React 封装自己组件       |   [源码](https://github.com/2662419405/sh-react)   | [线上](http://2pz8cm.coding-pages.com/?path=/story/welcome-page--welcome) |                   TS + Hooks |
| Vue 社区论坛网站(开发中) |   [源码](https://github.com/2662419405/vue-feng)   |                                         [线上](http://feng.shtodream.cn/) |                   TS + Hooks |
| :fire: Vue React H5数据可视化,数据报表(开发中) |   [源码](https://github.com/2662419405/echarts-template)   |                                         正在开发 |                   TS + Hooks |

## TodoMVC 系列

- ⚡ Mobx.React.TodoMVC (Mobx) [MVC](/mobx-todo-mvc)
- 🔥 React.TodoMVC ( TS + Hooks ) [MVC](/react-mvc)
- 🐠 Vue.TodoMVC ( 普通版 ) [MVC](vue-mvc)
- ✂️ Vue.TodoMVC ( TS ) [MVC](vue-ts-mvc)

## 框架篇

**vue 阶段**

1. vue 购物车 -> [进入购物车](/shop)
2. element 练习 -> [框架练习](/login-element)
3. vuex 和 vueRouter -> [vuex 和 vue-router 练习](/vuexrouter)
4. vue 源码解析 -> [迷你 Vue](/迷你vue)
5. vue 项目入门 -> [实战练习 vue](/vue-mart)
6. vue 完整项目 -> [完整项目](/vue-mart2)
7. github 学习 koa -> [koa](/koaGithub)
8. vueSSR 渲染 -> [nuxt](/nuxt)
9. vue 原生 ssr -> [ssr](/ssr)
10. vue ts 测试 -> [vue-ts](/vue-ts)
11. vue 单元测试 -> [vue-demo](/ts-demo)

**React 阶段**

1. react 入门 & react 购物车 -> [react-first](/react-first) [react-sheng](/react-sheng)
2. react 生命周期 (react 16 之前,react 16.3 和 react 16.4 版本) [react-sheng](/react-sheng)
3. **react 新特性** 高级 context,HOC 高阶函数,具名插槽 [react-hide](/react-hide)
4. react 组件化 & antd 库的使用 & react-redux & react-thunk & react-router & redux-saga [react-antd](/react-antd)
5. generator -> [genertor](/genertor)
6. antd-pro & 骨架屏 & umi 项目实战 -> [react 项目](/react项目)
7. 手写 React 核心 Api & 探究 setState & 探究 diff 算法 -> [react 原理](/react原理)
8. react + ts + hooks + antd 实例 -> [react-hooks-ts](/react-hooks-ts)
9. react-hooks 全部常用的 hooks [react-hooks](/react-hooks)
10. 手写 redux,和常用中间件机制 [redux-middleware](/redux-middleware)

**node 阶段**

1.  node 基础课程 -> [node 基础](/node基础)
2.  node 持久化 mysql -> [node-mysql](/node-mysql)
3.  node 持久化 mongodb -> [mongodb](/node-mongo)
4.  koa 实战 -> [koa 实战](/koa实战)
5.  koa 鉴权 -> [koa 鉴权](/koa鉴权)

**前端综合**

1. 前端安全 -> [前端安全](/前端安全)
2. 自动化测试 -> [ce](/ce)
3. 性能优化 -> [xing](/xing)
4. TypeScript -> [ts](ts)
5. webpack 学习 -> [webpackStudy](/webpackStudy)
6. webpack 搭建 React 开发环境 [webpack-react](/webpack-react)

**微信**

1. 微信-> [weixin](/weixin)
2. 微信 oauth -> [weixin2](/weixin2)
3. 微信小程序初步学习 -> [xiaochengxu](/xiaochengxu)
4. 微信云开发练习 -> [yun](/yun)

## License

[MIT](/LICENSE)
