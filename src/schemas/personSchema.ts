import { z } from "zod";
import { MovieSchema } from "./movieSchema";

export const PersonSchema = z
  .object({
    adult: z.boolean(),
    also_known_as: z.array(z.string()).default([]).nullable().optional(),
    biography: z.string().nullable().optional(),
    birthday: z.string().nullable().optional(),
    deathday: z.string().nullable().optional(),
    gender: z.number().nullable().optional(), // Puede ser opcional si no siempre está presente
    homepage: z.string().nullable().optional(),
    know_for: z.array(MovieSchema).nullable().optional(),
    id: z.number(),
    imdb_id: z.string().nullable().optional(),
    known_for_department: z.string().nullable().optional(),
    name: z.string(),
    place_of_birth: z.string().nullable().optional(),
    popularity: z.number().nullable().optional(),
    profile_path: z.string().nullable().optional(),
  })
  .passthrough();

export const PersonSchemaWithType = PersonSchema.extend({
  type_identifier: z.string().nullable().optional(),
});

export const PersonSearchSchema = z.object({
  page: z.number(),
  results: z.array(PersonSchema),
  total_pages: z.number(),
  total_results: z.number(),
});
