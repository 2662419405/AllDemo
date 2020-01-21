<style scoped>
.quiz {
  width: 100%;
  height: 100%;
  overflow: hidden;
  padding: 5px;
  box-sizing: border-box;
}
.list p {
  margin: 10px 0;
  line-height: 1.5;
}
.weilogin {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.result h3 {
  text-align: center;
  margin: 10px 0;
  box-sizing: border-box;
}
.result img {
  display: block;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin: 5px auto;
}
</style>
<template>
  <div class="quiz" v-if="data">
    <div v-if="user" class="result">
      <img :src="user.headimgurl">
      <h3>你好 {{ user.nickname}}</h3>
      <div v-if="data.length !== 0">
        <div
          v-for="item in data"
          :key="item.question"
          v-show="item.show"
          class="animated fadeInLeft list"
        >
          <p class="fadeInLeft fadeOutDown">{{item.question}}</p>
          <cube-radio-group v-model="item.result" :options="item.options" @click="click()"/>
        </div>
        <div v-show="data.every(v => v.result !== '')">
          <h3 class="animated fadeInDown">测试得分：{{score}}</h3>
          <cube-button v-if="openid" :primary="true" @click="reset()">我也要做</cube-button>
          <cube-button v-else :primary="true" @click="reset()">再做一遍</cube-button>
        </div>
      </div>
    </div>
    <div v-else class="weilogin">
      <div v-if="shareData">
        <h3 class="animated fadeInDown">{{shareData.nickname}}的得分：{{shareData.score}}</h3>
        <cube-button :primary="true" @click="auth()">我也要做</cube-button>
      </div>
      <div v-else>
        <h3>准备进行微信登录</h3>
      </div>
    </div>
  </div>
</template>
<script>
import data from "./data";
import animate from "animate.css";
import axios from "axios";
axios.interceptors.request.use(
  config => {
    const token = window.localStorage.getItem('token')
    if(token){
      config.headers.common['Authorization'] = 'Bearer '+ token
    }
    return config
  },
  err => {
    return Promise.reject(err)
  }
)
export default {
  name: "HelloWorld",
  data() {
    return {
      data: [],
      user: null,
      openid: null,
      shareData: null
    };
  },
  computed: {
    score: function() {
      let sum =
        this.data &&
        this.data.reduce((sum, item) => {
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
        this.user != null && this.setShare()
      },
      immediate: true,
      deep: true
    }
  },
  methods: {
    getFirst() {
      let isFirst = true;
      this.data &&
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
      this.openid = null;
    },
    auth(){
      window.location.href = '/wxAuthorize'
    },
    async getUser(){
      const res = await axios.get('/getUser')
      return res.data
    },
    async getData  () {
      const res = await axios.get('/getData')
      return res.data
    },
    async getJSConfig() {
      console.log("wx:", wx);
      let res = await axios.get("/getJSConfig", {
        params: {
          url: window.location.href
        }
      });
      console.log("res.......", res.data);
      const apiList = [];
      apiList.push("onMenuShareTimeline");
      apiList.push("onMenuShareAppMessage");

      res.data.jsApiList = apiList;
      res.data.debug = false;
      // res.data.url = window.location.href
      wx.config(res.data);
    },
    setShare(){
      const url = `${window.location.origin}?score=${this.score}&nickname=${this.user.nickname}`
      const shareConfig = {
        title: `我的成绩是${this.score},你不来试试`,
        link:url,
        imgUrl:this.user.headimgurl,
      }
      wx.onMenuShareTimeline(shareConfig)
      wx.onMenuShareAppMessage(shareConfig)
    }
  },
  async mounted() {
    // console.log("1111");
    // 单元测试状态
    // this.data = JSON.parse(JSON.stringify(data));
    // this.user = {};
    // console.log("data", this.data);
    const score = getQueryString('score')
    if(score){
      this.shareData = {
        score: getQueryString('score'),
        headimgurl:getQueryString('headimgurl'),
        nickname:getQueryString('nickname')
        

      }
      return 
    }

    const token = getQueryString('token')
    if(token){
      window.localStorage.setItem('token',token)

      this.user = await this.getUser()
      this.data = await this.getData()
      this.getJSConfig()
    }else{
      this.auth()
    }


  }
};
function getQueryString(name) {
  var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
  var r = window.location.search.substr(1).match(reg);
  if (r != null) return unescape(r[2]);
  return null;
}
</script>

