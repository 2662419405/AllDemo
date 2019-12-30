<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import axios from 'axios'

export default {
  created() {
    axios.get('http://shtodream.cn:7300/mock/5e08a4657d30fb4da2043fcb/demo/users').then((res)=>{
      window.console.log(res)
    })    
  },
  name: 'home',
  components: {
    HelloWorld
  }
}
</script>
