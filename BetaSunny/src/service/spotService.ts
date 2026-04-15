import api from '@/api/axios.ts';
import { spotResponseSchema } from '../type/spot';
import type { SpotRequest, SpotResponse } from '../type/spot';

export const spotService = {
  /**
   * Recupère tous les spots
   */
  async getAllSpots(): Promise<SpotResponse[]>{
    const { data } = await api.get<SpotResponse[]>("/spot");
    return data;
  },

  /**
   * Recupère un spot par son ID
   * @param id
   */
  async getSpotById(id: number): Promise<SpotResponse>{
    const { data } = await api.get<SpotResponse>(`/spot/${id}`);
    return data;
  },

  /**
   * Crée un nouveau spot
   * @param spot
   */
  async createSpot(spot: SpotRequest): Promise<SpotResponse> {
    const { data } = await api.post<SpotResponse>('/spot',spot);
    return data;
  },

  /**
   * Met à jour un spot existant
   * @param id
   * @param spot
   */
  async updateSpot(id: number,spot: SpotRequest): Promise<SpotResponse> {
    const { data } = await api.put<SpotResponse>(`/spot/${id}`,spot);
    return data;
  },

  /**
   * Supprime un spot
   * @param id
   */
  async deleteSpot(id: number): Promise<void> {
    await api.delete(`/spot/${id}`);
  }
}
