# nuxt服务端渲染SSR

* <nuxt-child /> 相当于<route-view />

* 错误页面,在layouts页面创建一个error.vue

* 路由守卫,添加到plugins插件中,默认情况下是导出一个函数,参数中可以结构处app,是vue的实例,通过app.router可以获得路由

* 配置layout,他会包含在page上面,<nuxt-child />写一个插槽,具体某个页面使用layout,必须在配置中指出

页面异步获取数据
```js
<template>
  <div>
      获取数据
      <br />
      <ul>
        <li v-for="(item,index) in usersData" :key="index">
            {{item}}
        </li>
      </ul>
  </div>
</template>

<script>
function getUserData(){
    return new Promise((resolve,reject)=>{
        setTimeout(function(){
            resolve(['java','php','react'])
        },1000)
    })
}
export default {
  // 这个生命周期的执行时间会比所以的vue生命周期更早
  async asyncData() {
    //  使用await
    const usersData = await getUserData();
    // 这里面的数据会和data中的数据进行合并
    return {
      usersData
    }
  }
}
</script>

<style lang='stylus' scoped>

</style>
```

## vuex的使用

