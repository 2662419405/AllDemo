<template>
  <div>
      我是详情页
      <h2>返回上一个页面</h2>
      <el-button @click="$router.go(-1)">
        返回
      </el-button>
      <h2>
        通过query接收的参数
      </h2>
      {{ $route.query }}
  </div>
</template>

<script>
export default {
  asyncData({query,error}) {
    if(query.id){
      return {
        user: {
          name: 'tom'
        }
      }
    }
    error({statusCode:400,message:"请传递用户名"})
  },
}
</script>

<style lang='stylus' scoped>

</style>
