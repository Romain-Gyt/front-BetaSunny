<script setup lang="ts">

</script>

<template>
  <main class="flex flex-col md:flex-row h-[calc(100vh-64px)] w-full overflow-hidden">

    <aside class="w-full md:w-96 bg-slate-50 border-r border-slate-200 flex flex-col shadow-inner">
      <div class="p-4 bg-white border-b border-slate-200 space-y-3">
        <div class="h-10 bg-slate-100 rounded-lg animate-pulse"></div> <div class="flex gap-2">
        <div class="h-8 w-20 bg-slate-100 rounded-full animate-pulse"></div> <div class="h-8 w-20 bg-slate-100 rounded-full animate-pulse"></div>
      </div>
      </div>

      <div class="flex-1 overflow-y-auto p-4 space-y-4">
        <h2 class="text-sm font-semibold text-slate-500 uppercase tracking-wider">Spots à proximité</h2>

        <div v-for="i in 5" :key="i" class="p-4 bg-white rounded-xl border border-slate-200 shadow-sm hover:border-blue-300 transition-colors cursor-pointer">
          <div class="h-4 w-3/4 bg-slate-200 rounded mb-2"></div>
          <div class="h-3 w-1/2 bg-slate-100 rounded"></div>
        </div>
      </div>
    </aside>

    <section class="flex-1 relative bg-slate-200">
      <div class="absolute inset-0 flex flex-col items-center justify-center text-slate-400">
        <span class="text-64px mb-4">📍</span>
        <p class="font-medium">Zone d'affichage de la carte</p>
        <p class="text-sm italic">(Leaflet.js sera injecté ici)</p>
      </div>

      <button class="absolute bottom-6 right-6 md:hidden bg-blue-600 text-white p-4 rounded-full shadow-lg">
        Liste
      </button>
    </section>

  </main>
</template>

<style scoped>

</style>
