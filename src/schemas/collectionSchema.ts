import { z } from "zod";
import { MovieSchema } from "./movieSchema";

export const CollectionSchema = z.object({
  adult: z.boolean().nullable().optional(),
  backdrop_path: z.string().nullable().optional(),
  id: z.number(),
  name: z.string(),
  original_language: z.string().nullable().optional(),
  original_name: z.string().nullable().optional(),
  overview: z.string().nullable().optional(),
  poster_path: z.string().nullable().optional(),
  parts: z.array(MovieSchema).nullable().optional(),
});

export const CollectionSchemaWithType = CollectionSchema.extend({
  type_identifier: z.string().nullable().optional(),
});

export const CollectionAPIResponse = z.object({
  page: z.number(),
  results: z.array(CollectionSchema),
  total_pages: z.number(),
  total_results: z.number(),
});
