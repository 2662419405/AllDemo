<template>
  <div class="container">
    <div>
      <logo />
      <nuxt-link to="/users">用户列表</nuxt-link>
      <nuxt-link to="/users/detail">用户详情列表</nuxt-link>
      <h2>通过routepush跳转路由</h2>
      <el-button @click=" $router.push('/users/detail') ">去详情页</el-button>
      <h2>通过name路由跳转</h2>
      <el-button @click=" $router.push({name:'users-detail',query:{username:'sunhang',passwd:'123'}}) ">name跳转</el-button>
      <h2>跳转到动态路由</h2>
      <el-button @click=" $router.push({name: 'users-id',params: {id:1}}) ">name跳转</el-button>
      <h2>前往错误页面</h2>
      <el-button @click=" $router.push({path: '/users/good'}) ">错误</el-button>
      <h2>去获取数据的页面</h2>
      <el-button @click=" $router.push({path: '/data'}) ">数据</el-button>
      <h2>使用axios代理解决跨域问题,并且尝试从后台获取数据</h2>
      <el-button @click=" $router.push({name: 'home-id',params: {id:1}}) ">首页获取数据</el-button>
      <h2>使用vuex获取数据</h2>
      <el-button @click=" $router.push({path: '/about'}) ">vuex</el-button>
    </div>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo
  },
  layout: 'header'
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
