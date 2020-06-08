<template>
  <div>
      {{title}}
      我是一个vue组件
      <button
        @click="dianwo"
      >
          点我
      </button>
  </div>
</template>

<script>
export default {
    data() {
        return {
            title: "标题"
        }
    },
    methods: {
        async dianwo(){
            // const num = Math.random();
            // if(num>0.3){
            //     this.title = num
            // }else{
            //     this.title = 2
            // }
            this.title = 2
        }
    },
}
</script>

<style lang='stylus' scoped>

</style>
