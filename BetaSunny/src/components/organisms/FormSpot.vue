<script setup lang="ts">
import type { SpotRequest} from "@/type/spot.ts";
import { useFormValidation} from "@/composables/ui/useFormValidation.ts";
import { spotRequestSchema } from '@/type/spot.ts'
import {ref, watch} from "vue";
import FormField from "@/components/molecules/FormField.vue";
import AppButton from "@/components/atoms/AppButton.vue";


//emit
const emit = defineEmits(['submit','cancel','update-azimut'])
//formulaire
const form = ref<SpotRequest>({
  name: '',
  latitude: 0,
  longitude: 0,
  azimut: 0
});
// on surveille la valeur de azimut pour l'animation dans le parent
watch(() => form.value.azimut, (newValue) => {
  emit('update-azimut', newValue);
});



const { validate, errors, clearsErrors} = useFormValidation(spotRequestSchema);
const submitForm = () => {
  const {isValid, data} = validate(form.value);
  if(isValid){
    clearsErrors();
    emit('submit',data);
  }
}
const resetForm = () => {
  form.value = { name: '',latitude: 0, longitude: 0, azimut: 0 };
}
const cancelForm = () => {
  clearsErrors();
  resetForm();
  emit('cancel');
}


</script>

<template>
  <form @submit.prevent="submitForm" class="space-y-4 bg-white p-6 rounded-xl shadow-sm border border-slate-100">
    <FormField
      label="Nom du spot"
      v-model="form.name"
      :error="errors.name"
      placeholder="Ex: Dalle grise"
    />

    <div class="grid grid-cols-2 gap-4">
      <FormField
        label="Latitude"
        type="number"
        v-model.number="form.latitude"
        :min="-90"
        :max="90"
        :error="errors.latitude"
        placeholder="45.123"
      />
      <FormField
        label="Longitude"
        type="number"
        v-model.number="form.longitude"
        :min="-180"
        :max="180"
        :error="errors.longitude"
        placeholder="5.456"
      />
    </div>

    <FormField
      label="Azimut (Orientation)"
      type="number"
      v-model.number="form.azimut"
      :min="0"
      :max="360"
      :error="errors.azimut"
      placeholder="0 à 360"
    />

    <div class="flex gap-3 pt-4">
      <AppButton
        variant="secondary"
        class="flex-1"
        @click="cancelForm"
      >
        Réinitialiser
      </AppButton>

      <AppButton
        type="submit"
        class="flex-[2]"
      >
        Enregistrer le spot
      </AppButton>
    </div>
  </form>
</template>

<style scoped>

</style>
