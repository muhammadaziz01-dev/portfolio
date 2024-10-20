import { createRouter, createWebHistory } from 'vue-router';
import Home from '../pages/home/index.vue';
import Error from '../pages/error/index.vue';
import About from '../pages/about/index.vue';
import Contact from '../pages/contact/index.vue';
import Portfolio from '../pages/portfolio/index.vue';

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/about',
    component: About
  },
  {
      path: '/portfolio',
      component: Portfolio
    },
    
    {
      path: '/contact',
      component: Contact
    },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;