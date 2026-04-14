<script setup lang="ts">
import {routes} from "@/router";
import {computed} from "vue";

const filteredRoutes = computed(() => {
   return routes.filter(r => r.meta.showInNav)
})
</script>

<template>
  <header class="bg-white border-b border-slate-200 shadow-sm sticky top-0 z-50">
    <div class="container mx-auto px-4 h-16 flex items-center justify-between">
      <router-link to="/" class="flex items-center gap-2 group">
        <span class="text-2xl group-hover:scale-110 transition-transform">☀️</span>
        <span class="text-xl font-bold bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
          BetaSunny
        </span>
      </router-link>

      <nav class="flex items-center gap-6">
        <router-link
          v-for="route in filteredRoutes"
          :key="route.path"
          :to = "{ name: route.name}"
          class="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors"
          active-class="text-blue-600 !font-bold"
        >
          {{ route.meta.title }}
        </router-link>
      </nav>

      <div class="hidden md:block">
        <span class="text-xs px-2 py-1 bg-green-100 text-green-700 rounded-full font-semibold">
          Serveur Online
        </span>
      </div>
    </div>
  </header>
</template>
