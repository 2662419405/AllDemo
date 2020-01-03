<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <ul>
      <li>
        <router-link to="/">首页</router-link>
      </li>
      <li>
        <router-link to="/kkb">开课吧</router-link>
      </li>
    </ul>
    <router-view></router-view>
  </div>


</template>

<script>

export default {
  name: 'app',
}
</script>

<style>
</style>
