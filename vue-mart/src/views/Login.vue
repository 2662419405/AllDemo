<template>
  <div>
    <div class="logo">
      <img src="https://img.kaikeba.com/logo-new.png" alt>
    </div>
    <!-- <cube-button>登录</cube-button> -->
    <cube-form 
      :model="model" 
      :schema="schema" 
      @submit="handleLogin"
      @validate="haneldValidate">
    </cube-form>
  </div>
</template>

<script>
export default {
  created() {
    this.$store.dispatch('getInfo')
  },
  data() {
    return {
      model: {
        username: "",
        passwd: ""
      },
      schema: {
        // 表单结构定义
        fields: [
          // 字段数组
          {
            type: "input",
            modelKey: "username",
            label: "用户名",
            props: {
              placeholder: "请输入用户名"
            },
            rules: {
              // 校验规则
              required: true
            },
            trigger: "blur"
          },
          {
            type: "input",
            modelKey: "passwd",
            label: "密码",
            props: {
              type: "password",
              placeholder: "请输入密码",
              eye: {
                open: false
              }
            },
            rules: {
              required: true
            },
            trigger: "blur"
          },
          {
            type: "submit",
            label: "登录"
          }
        ]
      }
    };
  },
  methods: {
    handleLogin(e){
      e.preventDefault()
      this.$store.dispatch('login',this.model)
        .then((res)=>{
          if(res){
            // 登录成功,重定向
            const path = this.$route.query.redirect || '/' ;
            this.$router.push(path);
          }
        }).catch((error)=>{
          // 有错误发生了 
          const toast = this.$createToast({
            time: 1000,
            txt: error.message || error.response.data.message || '登录失败',
            type: 'error'
          })
          toast.show()
        })
    },
    haneldValidate(){
      
    }
  },
};
</script>

<style scoped>
</style>