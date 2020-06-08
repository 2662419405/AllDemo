<template>
  <div>
    <div class="loading">
      <el-progress type="dashboard" :percentage="percentage" :color="colors"></el-progress>
      <br />
      <span class="zhong">正在加载中</span>
    </div>
    <div v-show="false">
      <img src="/image/o_74911.jpg" alt />
      <img src="/image/o_770659.jpg" alt />
      <img src="/image/o_899029.jpg" alt />
      <img src="/image/sh.jpg" alt />
      <img src="/image/PChome.gif" alt />
      <img src="/image/PCdetail.gif" alt />
      <img src="/image/PC1.jpg" />
      <img src="/image/PC2.jpg" />
      <img src="/image/PC3.jpg" />
    </div>
    <div v-show="show">
      <nuxt-child />
    </div>
  </div>
</template>
  <script>
export default {
  mounted() {
    var _this = this;
    let imgs = document.querySelectorAll("img");
    this.num = imgs.length;
    Array.from(imgs).forEach(item => {
      let img = new Image();
      img.onload = () => {
        this.count++;
        this.percentage = Math.floor((this.count / imgs.length) * 100);
      };
      img.src = item.getAttribute("src");
    });
  },
  data() {
    return {
      count: 0,
      show: false,
      percentage: 0,
      num: 0,
      colors: [
        { color: "#f56c6c", percentage: 20 },
        { color: "#e6a23c", percentage: 40 },
        { color: "#5cb87a", percentage: 60 },
        { color: "#1989fa", percentage: 80 },
        { color: "#6f7ad3", percentage: 100 }
      ]
    };
  },
  watch: {
    count(val, oldval) {
      if (val == this.num) {
        this.show = true;
      }
    }
  }
};
</script>
  <style scoped>
.loading {
  height: 200px;
  width: 126px;
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  margin: auto;
}
.zhong {
  text-align: center;
  display: block;
}
</style>