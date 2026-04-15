<script setup lang="ts">
interface Props {
  htmlFor?: string;
}

defineProps<Props>();
</script>

<template>
  <label
    :for="htmlFor"
    class="block text-sm font-semibold text-slate-700 mb-1"
  >
    <slot />
  </label>
</template>
