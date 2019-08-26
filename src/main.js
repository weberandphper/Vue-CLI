import Vue from "vue";
import App from "./App";
import api from "./api";
import store from "./store";
import router from "./router";
import mixin from "./utils/mixin";
import eventBus from "./utils/event-bus";

import "./styles/index.scss";
import "@/assets/font/iconfont.css";

Vue.config.productionTip = false;
Vue.use(mixin);

Vue.prototype.$api = api;
Vue.prototype.$store = store;
Vue.prototype.$eventBus = eventBus;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
