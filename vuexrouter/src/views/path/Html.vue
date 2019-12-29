<template>
  <div>
      html模板
      {{ $route.params.id }}
      <el-button
        @click="goBackHistory"
      >
        回退
      </el-button>
  </div>
</template>

<script>
export default {
  methods: {
    goBackHistory(){
      this.$router.go(-1)
    }
  },
}
</script>

<style>

</style>