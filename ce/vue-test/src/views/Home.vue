<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <Kaikeba></Kaikeba>
  </div>
</template>

<script>
// @ is an alias to /src
import Kaikeba from '@/components/Kaikeba.vue'

export default {
  name: 'home',
  components: {
    Kaikeba
  }
}
</script>
