<script setup lang="ts">
import { Toaster } from 'vue-sonner'
import AppHeader from '@/components/organisms/layout/AppHeader.vue'
import AppFooter from '@/components/organisms/layout/AppFooter.vue'
</script>

<template>
  <Toaster position="top-right" richColors closeButton />

  <div class="flex flex-col min-h-screen bg-slate-50">
    <AppHeader />

    <main class="flex-grow container mx-auto px-4 py-8">
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </main>

    <AppFooter />
  </div>
</template>

<style>
/* Petite animation fluide entre les pages */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
