import Vue from "vue";
import Router from "vue-router";

import homePage from "../pages/home";
import allaReceptPage from "../pages/allarecept";
import receptPage from "../pages/recept";

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
      path: "/recept",
      name: "allarecept",
      component: allaReceptPage,
    },
    {
      path: "/recept/:recept",
      name: "recept",
      component: receptPage,
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
          offset = -80;
        }
        window.scrollTo({
          top: document.querySelector(to.hash).offsetTop + (offset),
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
