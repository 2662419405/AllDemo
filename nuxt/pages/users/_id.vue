<template>
  <div>
      {{ $route.params.id }}
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
