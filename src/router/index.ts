import { createRouter, createWebHistory } from 'vue-router'

import {HOME, ASSET_MANAGEMENT, ASSET_MANAGEMENT_ADD, SETTINGS} from './pages'
import DashboardLayout from '@/layout/dashboard.vue'

const routes = [
  {
    path: '/',
    name: HOME,
    component: () => import('@/views/Home.vue'),
    meta: {
      layout: DashboardLayout,
    },
  },
  {
    path: '/asset',
    name: ASSET_MANAGEMENT,
    component: () => import('@/views/asset-management/AssetManage.vue'),
    meta: {
      layout: DashboardLayout,
    },
  },
  {
    path: '/asset/add',
    name: ASSET_MANAGEMENT_ADD,
    component: () => import('@/views/asset-management/AddAsset.vue'),
    meta: {
      layout: DashboardLayout,
    },
  },
  {
    path: '/settings',
    name: SETTINGS,
    component: () => import('@/views/Settings.vue'),
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