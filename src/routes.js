import Index from "@/pages/Main.vue";
import NotFound from "@/pages/NotFound.vue";
import RecipeDetail from "@/pages/RecipeDetail.vue";

export const routes = [
  { path: "/", component: Index },
  { path: "/recept/:slug", component: RecipeDetail },
  { path: "/:path(.*)", component: NotFound },
];

export default routes;
