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
}
</script>

<style lang='stylus' scoped>

</style>
