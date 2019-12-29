<template>
  <div>
      php模板
      <br>
      当你点击 router-link 时，这个方法会在内部调用，所以说，点击 router-link :to="..." 等同于调用 router.push(...)。
      点击前往about页面<br>
      <el-button type="primary" @click="addRouterChangeEvent">主要按钮</el-button>
  </div>
</template>

<script>
export default {
  methods: {
    addRouterChangeEvent(){
      this.$router.push({ name: 'html', params: { id: '123' }})
    }
  },
}
</script>

<style>

</style>