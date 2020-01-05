<template>
    <div>
    <span>{{ message }}</span>
    <button @click="changeMsg">点击</button>
    </div>
</template>

<script>
  export default {
    data () {
      return {
        message: 'vue-text'
      }
    },
    created () {
      this.message = '测试'
    },
    methods:{
        changeMsg(){
            this.message = '点我'
        }
    }
  }
</script>