import Vue from "vue";
import Vuex from "vuex";

import Auth from "./config/auth";
import Recaptcha from "./config/recaptcha";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    Auth,
    Recaptcha,
  },
  state: {},
  getters: {},
  mutations: {},
  actions: {},
});
