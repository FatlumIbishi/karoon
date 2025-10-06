import Index from '@/pages/index.vue';
import About from '@/pages/about.vue';
import NotFound from '@/pages/not-found.vue';

export const routes = [
  { path: '/', component: Index },
  { path: '/about', component: About },
  { path: '/:path(.*)', component: NotFound },
];

export default routes;
