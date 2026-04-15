<script setup lang="ts">
import {watch} from "vue";

interface Props {
  type?: 'text' | 'number' | 'password' | 'email';
  min?: number;
  max?: number;
  placeholder?: string;
  hasError?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  type: 'text',
  placeholder: '',
  hasError: false
})

const model = defineModel<string | number>();

// Surveillance stricte de la donnée
watch(model, (newValue) => {
  if (props.type !== 'number' || newValue === undefined || newValue === null || newValue === '') return;

  const numValue = Number(newValue);

  // Si on dépasse le max défini en prop
  if (props.max !== undefined && numValue > props.max) {
    model.value = props.max;
  }

  // Si on est en dessous du min défini en prop
  if (props.min !== undefined && numValue < props.min) {
    model.value = props.min;
  }
});
</script>

<template>
  <input
    v-model="model"
    :type="type"
    :placeholder="placeholder"
    :min="min"
    :max="max"
    class="w-full px-4 py-2 rounded-lg border transition-all duration-200 outline-none focus:ring-2"
    :class="[
      // Style par défaut
      'border-slate-300 bg-white text-slate-900 placeholder:text-slate-400 focus:border-sun-500 focus:ring-sun-200',
      // Style en cas d'erreur
      { 'border-red-500 focus:border-red-500 focus:ring-red-100 bg-red-50': hasError }
    ]"
  >
</template>
