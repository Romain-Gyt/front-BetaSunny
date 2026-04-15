<script setup lang="ts">
import FormSpot from "@/components/organisms/FormSpot.vue";
import { useSpots } from "@/composables/spot/useSpot.ts";
import { useRouter } from "vue-router";
import type { SpotRequest } from "@/type/spot.ts";
import {ref} from "vue";
// import { Mountain } from 'lucide-vue-next';

const router = useRouter();
const { addSpot } = useSpots();
const currentAzimut = ref(0);

const handleAzimutUpdate = (newValue: number) => {
  currentAzimut.value = newValue;
};

const handleSpotSubmit = async (data: SpotRequest) => {
    const response = await addSpot(data);
    if (response) {
      setTimeout(() => {
        router.push({ name: 'home' });
      }, 1000);
    }
}

const getAzimutDescription = (angle: number) => {
  if (angle >= 135 && angle <= 225) return "Plein Sud : Idéal pour grimper en hiver ! ❄️";
  if (angle > 225 && angle <= 315) return "Ouest : Ombre le matin, soleil brûlant l'après-midi. 🌅";
  if (angle > 45 && angle < 135) return "Est : Parfait pour les sessions matinales. ☕";
  return "Nord : Toujours à l'ombre. Idéal pour les canicules ! 🧊";
}
</script>

<template>
  <section class="py-6 sm:py-10 font-sans">
    <div class="max-w-5xl mx-auto">

      <header class="mb-10 flex items-center gap-4">
        <div class="p-3 bg-sun-500 rounded-2xl shadow-lg shadow-sun-200">
          <span class="text-white text-2xl">⛰️</span>
        </div>
        <div>
          <h1 class="text-3xl font-extrabold text-slate-900 tracking-tight">Nouveau Spot</h1>
          <p class="text-slate-500 mt-1">Ajoutez une falaise pour aider la communauté à trouver le soleil.</p>
        </div>
      </header>

      <div class="grid grid-cols-1 lg:grid-cols-3 gap-10">

        <div class="lg:col-span-2">
          <div class="bg-white rounded-2xl shadow-xl shadow-slate-200/60 overflow-hidden border border-slate-100">
            <div class="h-2 bg-sun-500 w-full"></div>
            <div class="p-8">
              <FormSpot @submit="handleSpotSubmit" @update-azimut="handleAzimutUpdate" />
            </div>
          </div>
        </div>

        <aside class="space-y-6">

          <!--  ASTUCE AZIMUT  -->
          <section class="bg-blue-50 p-6 rounded-2xl border border-blue-100">
            <h3 class="text-blue-800 font-bold flex items-center gap-2 mb-3 text-sm uppercase tracking-wide">
              💡 Astuce Azimut
            </h3>
            <p class="text-blue-700 text-sm leading-relaxed italic">
              L'azimut est l'orientation de la paroi. <br>
              <strong>0°</strong> = Nord | <strong>180°</strong> = Sud
            </p>
          </section>

          <!--  BOUSOLLE  -->
          <section class="p-6 rounded-2xl bg-white border border-slate-100 shadow-xl overflow-hidden relative">
            <h3 class="text-slate-800 font-bold text-sm uppercase tracking-widest mb-6 flex items-center gap-2">
              <span class="p-1 bg-sun-100 rounded text-sun-600">☀️</span>
              Orientation du rocher
            </h3>

            <div class="flex flex-col items-center justify-center py-4">

              <div class="relative w-40 h-40 rounded-full border-4 border-slate-50 shadow-inner flex items-center justify-center bg-[conic-gradient(from_0deg,#eff6ff_0deg_90deg,#fef3c7_90deg_270deg,#eff6ff_270deg_360deg)]">

                <span class="absolute top-2 text-xs font-black text-blue-600">N</span>
                <span class="absolute right-2 text-xs font-black text-slate-400">E</span>
                <span class="absolute bottom-2 text-xs font-black text-sun-600">S</span>
                <span class="absolute left-2 text-xs font-black text-slate-400">O</span>

                <div class="absolute inset-4 rounded-full border border-dashed border-slate-300/50"></div>

                <div
                  class="absolute w-1.5 h-16 transition-transform duration-700 ease-out"
                  :style="{
                    transform: `rotate(${currentAzimut}deg) translateX(-50%)`,
                    top: '10%',
                    left: '50%',
                    transformOrigin: 'bottom center'
                  }"
                >
                  <div class="absolute -top-3 -left-2.5 w-7 h-7 flex items-center justify-center">
                    <div class="absolute inset-0 bg-sun-400 rounded-full blur-sm opacity-80 animate-pulse"></div>

                    <div class="relative w-5 h-5 bg-[radial-gradient(ellipse_at_center,_#ffffff_0%,_#f59e0b_40%,_#d97706_100%)] rounded-full border-2 border-white shadow-lg flex items-center justify-center">
                      <div class="w-1.5 h-1.5 bg-white rounded-full shadow-inner animate-pulse"></div>
                    </div>

                    <div class="absolute -top-1 w-0 h-0 border-l-[4px] border-r-[4px] border-b-[6px] border-l-transparent border-r-transparent border-b-white rotate-180"></div>
                  </div>
                </div>

                <div class="absolute w-3 h-3 bg-slate-800 rounded-full border-2 border-white shadow-sm z-10"></div>
              </div>

              <div class="mt-4 px-4 py-2 bg-sun-50 border border-sun-100 rounded-xl shadow-inner relative overflow-hidden group">
                <div class="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/40 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>

                <div class="flex flex-col items-center relative z-10">
                  <span class="text-[9px] uppercase tracking-[0.2em] text-sun-400 font-black">Azimut</span>
                  <p class="text-2xl font-mono font-black text-sun-600 tracking-tighter">
                    {{ String(currentAzimut).padStart(3, '0') }}°
                  </p>
                  <div class="h-0.5 w-8 bg-sun-200 rounded-full mt-0.5"></div>
                </div>
              </div>
            </div>

            <div
              class="mt-4 p-3 rounded-xl text-xs font-semibold leading-relaxed transition-colors duration-500"
              :class="currentAzimut > 135 && currentAzimut < 225 ? 'bg-sun-50 text-sun-700 border border-sun-100' : 'bg-blue-50 text-blue-700 border border-blue-100'"
            >
              {{ getAzimutDescription(currentAzimut) }}
            </div>
          </section>
        </aside>
      </div>
    </div>
  </section>
</template>
