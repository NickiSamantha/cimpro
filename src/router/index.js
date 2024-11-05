import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue'; 
import UnitTypeList from '../components/UnitTypeList.vue'; 
import UnitTypeTable from '@/components/UnitTypeTable.vue';

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
  {
    path: '/unit-type-table',
    name: 'unit-table',
    component: UnitTypeTable,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
