import Vue from "vue";
import Router from "vue-router";

import homePage from "../pages/home";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "Home",
      component: homePage,
    },
    {
      path: "*",
      redirect: "/",
    },
  ],
  scrollBehavior(to) {
    let offset = 0;
    if (to.hash) {
      return setTimeout(() => {
        if (window.innerWidth > 640) {
          offset = -130;
        }
        window.scrollTo({
          top: document.querySelector(to.hash).offsetTop + (offset + -20),
          behavior: "smooth",
        });
      }, 10);
    }
    return window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  },
});
