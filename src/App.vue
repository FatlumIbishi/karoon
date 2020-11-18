<template>
  <div id="app">
    <Menu />
    <router-view></router-view>
    <Footer />
  </div>
</template>

<script>
import Vue from "vue";
import VueRouter from "vue-router";
import Menu from "./shared/menu"
import Footer from "./shared/footer"

Vue.use(VueRouter);

export default {
  name: "app",
  components: {
    Menu,
    Footer
  }
};
</script>