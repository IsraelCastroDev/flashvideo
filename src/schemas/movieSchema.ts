import { boolean, z } from "zod";

export const MovieSchema = z.object({
  adult: boolean(),
  backdrop_path: z.string(),
  id: z.number(),
  original_language: z.string(),
  original_title: z.string(),
  overview: z.string(),
  poster_path: z.string(),
  release_date: z.string(),
  title: z.string(),
  vote_average: z.number(),
});

export const MovieAPIResponse = z.object({
  page: z.number(),
  results: z.array(MovieSchema),
  total_pages: z.number(),
  total_results: z.number(),
});
