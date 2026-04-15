<script setup lang="ts">
import AppLabel from "@/components/atoms/AppLabel.vue";
import AppInput from "@/components/atoms/AppInput.vue";
import {useId} from "vue";

interface Props {
  label: string;
  type?: 'text' | 'number' | 'password' | 'email';
  placeholder?: string;
  min?: number;
  max?: number;
  error?: string;
}

const props = withDefaults(defineProps<Props>(), {
  type: 'text',
  placeholder: '',
});

const model = defineModel<string | number>();

const uuid = useId();
</script>

<template>
  <div class="flex flex-col w-full mb-4">
    <AppLabel :htmlFor="uuid">
      {{ label }}
    </AppLabel>

    <AppInput
      :id="uuid"
      v-model="model"
      :type="type"
      :placeholder="placeholder"
      :min="min"
      :max="max"
      :has-error="!!error"
    />

    <p
      v-if="error"
      class="mt-1.5 text-xs text-red-600 font-medium animate-in fade-in slide-in-from-top-1"
    >
      {{ error }}
    </p>
  </div>
</template>
