import { ref } from 'vue';
import type { z } from 'zod';


export function useFormValidation<T>(schema: z.ZodType<T>) {
  const errors = ref<Record<string,string>>({});

  const validate = (data: unknown) => {
    const result = schema.safeParse(data);
    if(!result.success) {
      const simpleErrors: Record<string, string> = {};
      for (const issue of result.error.issues){
        const key = issue.path[0];
        if ((typeof key === 'string' || typeof key === 'number') && !simpleErrors[key]) {
          simpleErrors[key] = issue.message;
        }
      }
      errors.value = simpleErrors;
      return { isValid: false, data: null};
    }
    errors.value = {};
    return { isValid: true, data: result.data };
  }

  const clearsErrors = () => {
    errors.value = {};
  }
  return {
    errors,
    validate,
    clearsErrors,
  }
}
