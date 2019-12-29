<template>
  <div id="app">
    <h3>Element表单</h3>
      <hr>
      <el-form :model="model" :rules="rules" ref="loginForm">
        <el-form-item label="用户名" prop="username">
          <el-input v-model="model.username" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="确认密码" prop="password">
          <el-input type="password" v-model="model.password" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('loginForm')">提交</el-button>
        </el-form-item>
      </el-form>
  </div>
</template>

<script>
export default {
  name:'app1',
  data() {
      return {
        value:'',
        model: { username: "tom", password: "" },
        rules: {
          username: [
            { required: true, message: "请输入用户名" },
            {min: 6,max:10,message:'请输入6~10的用户名'}
          ],
          password: [
            { required: true, message: "请输入密码" }
          ],
        }
      };
    },
    methods: {
        submitForm(form) {
            this.$refs[form].validate(valid=>{
                if (valid) {
                    alert('请求登录!')
                } else {
                    alert('校验失败！')
                }
            })
        }
    }
}
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>