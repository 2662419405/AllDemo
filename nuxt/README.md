# nuxt服务端渲染SSR

* <nuxt-child /> 相当于<route-view />

* 错误页面,在layouts页面创建一个error.vue

* 路由守卫,添加到plugins插件中,默认情况下是导出一个函数,参数中可以结构处app,是vue的实例,通过app.router可以获得路由

* 配置layout,他会包含在page上面,<nuxt-child />写一个插槽,具体某个页面使用layout,必须在配置中指出