import type { AxiosError, AxiosResponse, InternalAxiosRequestConfig } from 'axios';
import { toast } from 'vue-sonner';

// On définit l'interface de ton erreur Spring Boot (ton ApiErrorResponse Java)
interface ApiError {
  code: string;
  message: string;
  timestamp: string;
  errors?: string[];
}

/**
 * INTERCEPTEUR DE REQUÊTE
 * Utile pour : Ajouter des logs, des tokens JWT, ou gérer des headers dynamiques.
 */
export const onRequest = (config: InternalAxiosRequestConfig): InternalAxiosRequestConfig => {
  // On peut ajouter un timer pour calculer la durée de la requête plus tard
  (config as any)._startTime = Date.now();

  console.log(`🚀 [%cAPI%c] ${config.method?.toUpperCase()} ${config.url}`, 'color: #3b82f6; font-weight: bold', '');

  return config;
};

/**
 * INTERCEPTEUR DE RÉPONSE (SUCCÈS)
 */
export const onResponse = (response: AxiosResponse) => {
  if (['post', 'put', 'delete'].includes(response.config.method || '')) {
    toast.success('Action réussie !');
  }
  return response;
};

/**
 * INTERCEPTEUR D'ERREUR (LE CŒUR DU SYSTÈME)
 */
export const onError = (error: AxiosError<ApiError>) => {
  if (error.response) {
    const { status, data } = error.response;
    const message = data.message || "Une erreur est survenue";

    switch (status) {
      case 400:
        toast.error(`Données invalides : ${message}`);
        break;
      case 401:
        toast.error("Session expirée. Veuillez vous reconnecter.");
        break;
      case 403:
        toast.error("Vous n'avez pas les droits pour cette action.");
        break;
      case 404:
        toast.error("Ressource introuvable.");
        break;
      default:
        toast.error(`Erreur [${data.code || status}] : ${message}`);
    }
  } else {
    toast.error("Impossible de joindre le serveur.");
  }
  return Promise.reject(error);
};
