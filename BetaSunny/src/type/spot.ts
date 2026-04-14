import { z } from "zod";

export const spotRequestSchema = z.object({
  name: z.string()
    .min(2,"Le nom doit contenir au moins 2 caracteres")
    .max(50,"nom trop long "),

  latitude: z.number()
    .min(-90, "latitude invalide")
    .max(90, "latitude invalide"),

  longitude: z.number()
    .min(-180, "longitude invalide")
    .max(180, "longitude invalide"),

  azimut: z.number()
    .int("L'azimut doit être un nombre entier")
    .min(0, "L'azimut minimum est 0°")
    .max(360, "L'azimut maximum est 360°")
});

export const spotResponseSchema = spotRequestSchema.extend({
  id: z.number().positive(),
  creadedAt: z.iso.datetime()
});

export type SpotRequest = z.infer<typeof spotRequestSchema>;
export type SpotResponse = z.infer<typeof spotResponseSchema>;
