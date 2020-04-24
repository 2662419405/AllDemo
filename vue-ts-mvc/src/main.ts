import Vue from "vue";
import App from "./constants/App.vue";
import "./index.css";

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
