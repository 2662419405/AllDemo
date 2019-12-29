<template>
  <div>
      默认模块
      <router-link to='/demo/php'>php模板</router-link>
      <router-link to='/demo/html'>html模板</router-link>
      <router-view></router-view>
  </div>
</template>

<script>
export default {
  watch: {
    '$route' (from,to){
      console.log(from,to)
    }
  },
}
</script>

<style>

</style>