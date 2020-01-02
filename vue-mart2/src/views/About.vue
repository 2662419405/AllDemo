<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  created(){
    // 获取用户信息
    axios.get('/api/userinfo')
  }
}
</script>
