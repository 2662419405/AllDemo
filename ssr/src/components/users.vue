<template>
  <div>
      我是用户页
  </div>
</template>

<script>
import axios from 'axios'
export default {
  created() {
    window.console.log(1)
    axios.get('http://shtodream.cn:7300/mock/5e08a4657d30fb4da2043fcb/demo/userinfo').then((res)=>{
      window.console.log(res)
    })
  },
}
</script>

<style lang='stylus' scoped>

</style>
