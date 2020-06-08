<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <Quiz/>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import Quiz from './components/Quiz.vue'
export default {
  name: 'app',
  components: {
    // HelloWorld,
    Quiz
  }
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
  list-style: none;
}
html,body,#app{
  width: 100%;
  height: 100%;
  list-style: none;
  overflow: hidden;
  font-size: 20px;
}
</style>
