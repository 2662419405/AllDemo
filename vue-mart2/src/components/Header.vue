<template>
  <div class="header">
    <h1>{{title}}</h1>
    <i v-if="$routerHistory.canBack()" @click="back" class="cubeic-back"></i>
    <div class="extend">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: "",
      required: true
    },
    showback: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    back() {
      this.$router.goBack();
    }
  }
};
</script>
<style lang="stylus" scoped>
.header {
  position: relative;
  height: 44px;
  line-height: 44px;
  text-align: center;
  background: #edf0f4;

  .cubeic-back {
    position: absolute;
    top: 0;
    left: 0;
    padding: 0 15px;
    color: #fc915b;
  }

  .extend {
    position: absolute;
    top: 0;
    right: 0;
    padding: 0 15px;
    color: #fc915b;
  }
}
</style>