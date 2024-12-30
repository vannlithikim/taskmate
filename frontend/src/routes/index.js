// src/router.js

import { createRouter, createWebHistory } from "vue-router";
import HomePage from "@/views/HomePage.vue";

const routes = [
  {
    path: "/",
    name: "homepage",
    component: HomePage,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
