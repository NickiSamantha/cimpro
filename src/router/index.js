// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue'; // Adjust based on your file structure
import UnitTypeList from '../components/UnitTypeList.vue'; // Adjust based on your file structure

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/unit-types',
    name: 'unit-types',
    component: UnitTypeList,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
