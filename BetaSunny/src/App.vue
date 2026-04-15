<script setup lang="ts">
import { Toaster } from 'vue-sonner'
import AppHeader from '@/components/organisms/layout/AppHeader.vue'
import AppFooter from '@/components/organisms/layout/AppFooter.vue'
</script>

<template>
  <Toaster
    position="bottom-right"
    richColors
    closeButton
    :expand="true"
    :toastOptions="{
      style: { zIndex: 9999 },
      classes: {
        toast: 'rounded-xl border shadow-lg px-4 py-3 mb-2 mr-2',
        title: 'text-sm font-semibold',
        description: 'text-xs opacity-90',
        success: 'bg-emerald-50 border-emerald-200 text-emerald-800',
        error: 'bg-red-50 border-red-200 text-red-800',
        info: 'bg-blue-50 border-blue-200 text-blue-800',
      }
    }"
  />

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
/* Pour s'assurer que le Toaster ne colle pas trop au coin de l'écran */
[data-sonner-toaster] {
  padding: 16px;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
