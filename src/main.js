import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./css/variables.scss";
import { Plugin } from "vue-fragment";

Vue.config.productionTip = false

Vue.use(Plugin);

new Vue({
  router,
  store,
  render: h => h(App),
  mounted () {
    document.dispatchEvent(new Event('render-event'))
  }
}).$mount("#app");
