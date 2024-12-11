// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import("@/views/templates/home/HomePage.vue"),
  },

  {
    path: '/about',
    name: 'About',
    component: () => import("@/views/templates/about/AboutUs.vue"),
  },

  {
    path: '/login',
    name: 'Login',
    component: () => import("@/views/templates/login/LoginPage.vue"),
  },
  {
    path: '/sign-up',
    name: 'SignUpPage',
    component: () => import("@/views/templates/login/SignUpPage.vue"),
  }

];

// Create and export the router instance
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
