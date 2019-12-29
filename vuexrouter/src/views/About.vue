<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  created() {
    axios.get('http://shtodream.cn:7300/mock/5e08a4657d30fb4da2043fcb/demo/user').then((res)=>{
      console.log(res)
    })
  },
}
</script>
