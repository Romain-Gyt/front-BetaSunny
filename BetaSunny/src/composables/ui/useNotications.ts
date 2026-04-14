import { toast } from 'vue-sonner';

export function useNotifications() {
  const success = (message: string, description?: string) => {
    toast.success(message,{
      description: description || '',
    });
  };

  const error = (message: string, description?: string) => {
    toast.error(message, {
      description: description || '',
    });
  };

  const info = (message: string) => {
    toast.info(message, {});
  };

  const warning = (message: string) => {
    toast.warning(message, {});
  };

  const promise = (promise: Promise<any>, messages : { loading: string; success: string; error: string }) => {
    return toast.promise(promise, messages);
  };

  return {
    success,
    error,
    info,
    warning,
    promise
  };
}
