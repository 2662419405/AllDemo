<template>
  <view>
    <view v-if="userinfo">{{userinfo.name}}</view>
    <view @click="initData" v-else>暂无昵称</view>
    <van-button>按钮</van-button>
    <van-button type="primary">主要按钮</van-button>
    <van-button type="info">信息按钮</van-button>
    <van-button type="default">默认按钮</van-button>
    <van-button type="warning">警告按钮</van-button>
    <van-button type="danger">危险按钮</van-button>
  </view>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState(["userinfo"]),
  },
  onLoad() {
    // 查看是否授权
    uni.getSetting({
      success(res) {
        console.log(res);
      },
    });
  },
  methods: {
    initData() {
      const _this = this;
      if (!this.userinfo) {
        uni.login({
          provider: "weixin",
          success: function (loginRes) {
            uni.getUserInfo({
              provider: "weixin",
              success: function (infoRes) {
                console.log(infoRes);
              },
              fail: function () {
                console.log("失败");
              },
            });
          },
          fail: function () {
            console.log("失败");
          },
        });
      }
    },
  },
};
</script>

<style>
</style>