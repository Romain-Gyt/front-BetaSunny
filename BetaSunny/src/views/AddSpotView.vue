<script setup lang="ts">

</script>

<template>
  <main class="min-h-[calc(100vh-64px)] bg-slate-50 py-12 px-4">

    <div class="max-w-2xl mx-auto">

      <router-link
        to="/"
        class="text-sm text-slate-500 hover:text-blue-600 flex items-center gap-2 mb-6 transition-colors"
      >
        <span>←</span> Retour à la carte
      </router-link>

      <header class="mb-8">
        <h1 class="text-3xl font-bold text-slate-900">Ajouter un nouveau spot</h1>
        <p class="text-slate-600 mt-2">
          Aidez la communauté à trouver les meilleures conditions en répertoriant une nouvelle falaise.
        </p>
      </header>

      <section class="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">

        <div class="p-8 space-y-8">

          <div class="space-y-4">
            <h2 class="text-lg font-semibold text-slate-800 border-b pb-2">Informations générales</h2>
            <div class="grid grid-cols-1 gap-6">
              <div class="h-12 bg-slate-50 border-2 border-dashed border-slate-200 rounded-lg flex items-center justify-center text-slate-400 text-sm">
                Inputs: Nom du spot & Type de roche
              </div>
            </div>
          </div>

          <div class="space-y-4">
            <h2 class="text-lg font-semibold text-slate-800 border-b pb-2">Localisation & Orientation</h2>
            <div class="grid grid-cols-2 gap-4">
              <div class="h-24 col-span-2 bg-slate-50 border-2 border-dashed border-slate-200 rounded-lg flex items-center justify-center text-slate-400 text-sm">
                Inputs: GPS (Lat/Lng) & Azimut (Boussole)
              </div>
            </div>
          </div>

          <div class="pt-4 flex justify-end gap-3">
            <div class="h-10 w-24 bg-slate-100 rounded-lg"></div> <div class="h-10 w-32 bg-blue-100 rounded-lg"></div> </div>

        </div>

      </section>

      <footer class="mt-8 p-4 bg-blue-50 rounded-lg flex gap-3">
        <span class="text-blue-500">💡</span>
        <p class="text-sm text-blue-800">
          <strong>Conseil :</strong> L'azimut se mesure face à la paroi. Un mur plein Sud a un azimut de 180°.
        </p>
      </footer>

    </div>
  </main>
</template>

<style scoped>

</style>
