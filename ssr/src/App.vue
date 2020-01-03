<template>
  <div>
    我是首页
    <router-link to="/home">去首页</router-link>
    <router-link to="/users">去用户页</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
}
</script>

<style lang='stylus' scoped>

</style>
