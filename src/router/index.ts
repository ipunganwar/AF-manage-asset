import { createRouter, createWebHistory } from 'vue-router'

import DashboardLayout from '@/layout/dashboard.vue'

const routes = [
  {
    path: '/',
    name: 'HOME',
    component: () => import('@/views/Home.vue'),
    meta: {
      layout: DashboardLayout,
    },
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router