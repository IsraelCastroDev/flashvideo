import { z } from "zod";
import { KeywordSchema } from "./kewordSchema";

export const TVSeriesSchema = z.object({
  adult: z.boolean(),
  backdrop_path: z.string().nullable().optional(),
  genre_ids: z.array(z.number()).nullable().optional(),
  id: z.number().nullable().optional(),
  origin_country: z.array(z.string()).nullable().optional(),
  original_language: z.string().nullable().optional(),
  original_name: z.string().nullable().optional(),
  overview: z.string().nullable().optional(),
  popularity: z.number().nullable().optional(),
  poster_path: z.string().nullable().optional(),
  first_air_date: z.string().nullable().optional(),
  name: z.string().nullable().optional(),
  vote_average: z.number().nullable().optional(),
  vote_count: z.number().nullable().optional(),
  type: z.string().optional(),
  number_of_episodes: z.number().optional(),
  number_of_seasons: z.number().optional(),
  seasons: z
    .array(
      z.object({
        air_date: z.string().nullable(),
        episode_count: z.number(),
        id: z.number(),
        name: z.string(),
        overview: z.string().nullable(),
        poster_path: z.string().nullable(),
        season_number: z.number(),
        vote_average: z.number(),
      })
    )
    .optional(),
  networks: z
    .array(
      z.object({
        id: z.number(),
        logo_path: z.string(),
        name: z.string(),
        origin_country: z.string(),
      })
    )
    .optional(),
  status: z.string().optional(),
});

export const TVSeriesSchemaWithType = TVSeriesSchema.extend({
  type_identifier: z.string().nullable().optional(),
});

export const TVSerieKeywordsResponse = z.object({
  id: z.number(),
  results: KeywordSchema,
});

export const TVSeriesAPIResponse = z.object({
  page: z.number(),
  results: z.array(TVSeriesSchema),
  total_pages: z.number(),
  total_results: z.number(),
});

export const TVSerieRecommendationsAPIResponse = z.object({
  page: z.number(),
  results: z.array(TVSeriesSchema),
  total_pages: z.number(),
  total_results: z.number(),
});
