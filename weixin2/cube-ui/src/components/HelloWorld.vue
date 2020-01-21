<template>
  <div class="hello">
    <h3 class="title">小测试</h3>
    <div v-for="item in data" :key="item.question" v-show="item.show" class="animated fadeInRight content">
      <p class="fadeInLeft fadeOutDown">{{item.question}}</p>
      <cube-radio-group v-model="item.result" :options="item.options" @click="click()"/>
    </div>
    <div v-show="data.every(v => v.result !== '')" class="result">
      <h3 class="animated fadeInDown">测试得分：{{score}}</h3>
      <cube-button :primary="true" @click="reset()" class="button">再做一遍</cube-button>
    </div>
  </div>
</template>

<script>
import data from "./data";
import animate from "animate.css";
export default {
  name: "HelloWorld",
  data() {
    return {
      data: []
    };
  },
  computed: {
    score: function() {
      let sum = this.data.reduce((sum, item) => {
        if (item.result === item.options[item.answer]) {
          return ++sum;
        } else {
          return sum;
        }
      }, 0);
      return ((sum / this.data.length) * 100).toFixed(0);
    }
  },
  watch: {
    data: {
      handler(newName) {
        this.getFirst();
      },
      immediate: true,
      deep: true
    }
  },
  methods: {
    getFirst() {
      let isFirst = true;
      this.data.forEach(v => {
        if (v.result === "" && isFirst) {
          v.show = true;
          isFirst = false;
        } else {
          v.show = false;
        }
      });
    },
    reset() {
      this.data.forEach(v => (v.result = ""));
    }
  },
  mounted() {
    this.data = JSON.parse(JSON.stringify(data));
  }
};
</script>
<style scoped>
.hello{
  width: 100%;
  height: 100%;
  padding: 5px;
  box-sizing: border-box;
  overflow: hidden;
  position: relative;
}
.title{
  text-align: center;
  line-height: 3;
  font-weight: bolder;
  font-size: 24px;
}.content p{
  line-height: 2;
}
.result h3{
  text-align: center;
  font-size: 30px;
margin-top: 50%;
}
.button{
  position: absolute;
  bottom: 0;
  left: 0;
}
</style>
