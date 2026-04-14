import { createRouter, createWebHistory } from 'vue-router'
import type {AppRouteRecord} from "@/router/types.ts";
import HomeView from "@/views/HomeView.vue";
import AddSpotView from "@/views/AddSpotView.vue";
import SpotDetailView from "@/views/SpotDetailView.vue";

export const routes: AppRouteRecord[] = [
  {
    path:'/',
    name: 'home',
    component: HomeView,
    meta: {
      title: 'Explorer', showInNav: true
    }
  },
  {
    path: '/spots/add',
    name: 'spot-create',
    component: AddSpotView,
    meta: {
      title: 'Ajouter un spot', showInNav: true
    }
  },
  {
    path: '/spots/:id',
    name: 'spot-detail',
    component: SpotDetailView,
    meta: {
      title: 'Détail du Spot', showInNav: false
    }
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes,
})

export default router
