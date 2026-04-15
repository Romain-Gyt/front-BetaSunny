<script setup lang="ts">
interface Props {
  type?: 'button' | 'submit' | 'reset';
  variant?: 'primary' | 'secondary' | 'danger' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  type: 'button',
  variant: 'primary',
  size: 'md',
  disabled: false
});

// Mapping des styles pour éviter de polluer le template
const variantStyles = {
  primary: 'bg-amber-500 hover:bg-amber-600 text-white shadow-sm border-transparent',
  secondary: 'bg-slate-100 hover:bg-slate-200 text-slate-600 border-transparent',
  danger: 'bg-red-500 hover:bg-red-600 text-white border-transparent',
  ghost: 'bg-transparent hover:bg-slate-100 text-slate-500 border-transparent'
};

const sizeStyles = {
  sm: 'px-3 py-1.5 text-xs',
  md: 'px-4 py-2 text-sm',
  lg: 'px-6 py-3 text-base'
};
</script>

<template>
  <button
    :type="type"
    :disabled="disabled"
    class="inline-flex items-center justify-center font-bold rounded-lg border transition-all duration-200 active:scale-95 disabled:opacity-50 disabled:pointer-events-none"
    :class="[variantStyles[variant], sizeStyles[size]]"
  >
    <slot />
  </button>
</template>
