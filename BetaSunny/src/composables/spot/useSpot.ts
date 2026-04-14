import { computed, ref} from 'vue'
import { spotService } from '@/service/spotService'
import { spotResponseSchema, type SpotResponse, type SpotRequest } from '@/type/spot'
import { useNotifications } from '@/composables/ui/useNotications';

export function useSpots() {
  const { success, error: notifyError } = useNotifications();
  const spots = ref<SpotResponse[]>([])
  const spotToEdit = ref<SpotResponse | null>(null)
  const loading = ref(false)
  const error = ref<string | null>(null)
  const spotsCount = computed(() => spots.value.length);

  // Fonction de normalisation
  const normalize = (data: unknown): SpotResponse => {
    return spotResponseSchema.parse(data)
  }

  const fetchSpots = async () => {
    loading.value = true
    error.value = null
    try {
      const response = await spotService.getAllSpots()
      spots.value = response.map(normalize)
    } catch (err: any) {
      error.value = "Impossible de charger les spots"
    } finally {
      loading.value = false
    }
  }

  const fetchSpotById = async (id: number) => {
    loading.value = true
    error.value = null
    try {
      const response = await spotService.getSpotById(id)
      spotToEdit.value = normalize(response)
    } catch (err: any) {
      error.value = "Erreur lors du chargement du spot"
    } finally {
      loading.value = false
    }
  }

  const addSpot = async (spot: SpotRequest) => {
    loading.value = true
    try {
      const newSpot = await spotService.createSpot(spot)
      spots.value.push(normalize(newSpot))
      success("Spot créé !", `Le spot ${newSpot.name} est désormais disponible.`);
      return newSpot
    } catch (err: any) {
      // L'intercepteur gère déjà le toast, mais on peut mettre à jour l'état local
      error.value = "Erreur lors de la création"
    } finally {
      loading.value = false
    }
  }

  const updateSpot = async (id: number, spot: SpotRequest) => {
    loading.value = true
    try {
      const updated = await spotService.updateSpot(id, spot)
      const index = spots.value.findIndex(s => s.id === id)
      if (index !== -1) spots.value[index] = normalize(updated)
     success("Spot mis à jour")
    } catch (err: any) {
      error.value = "Erreur lors de la mise à jour"
    } finally {
      loading.value = false
    }
  }

  const deleteSpot = async (id: number) => {
    try {
      await spotService.deleteSpot(id)
      spots.value = spots.value.filter(s => s.id !== id)
     success("Spot supprimé")
    } catch (err: any) {
      error.value = "Erreur lors de la suppression"
    }
  }

  return {
    spots,
    spotToEdit,
    loading,
    error,
    spotsCount,
    fetchSpots,
    fetchSpotById,
    addSpot,
    updateSpot,
    deleteSpot,
  }
}
