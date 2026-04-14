import type { RouteRecordRaw } from 'vue-router'


export type AppRouteRecord = RouteRecordRaw & {
  meta: {
    title: string;
    showInNav: boolean;
    icon?: string;
  }
}
