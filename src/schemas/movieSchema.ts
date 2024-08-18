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
  genres: z
    .array(
      z.object({
        id: z.number(),
        name: z.string(),
      })
    )
    .nullable()
    .optional(),
});

export const MovieAPIResponse = z.object({
  page: z.number(),
  results: z.array(MovieSchema),
  total_pages: z.number(),
  total_results: z.number(),
});

// cast

export const CastSchema = z.object({
  adult: z.boolean(),
  gender: z.number(),
  id: z.number(),
  known_for_department: z.string(),
  name: z.string(),
  original_name: z.string(),
  popularity: z.number(),
  profile_path: z.string().nullable().optional(),
  cast_id: z.number(),
  character: z.string(),
  credit_id: z.string(),
  order: z.number(),
});

export const CreditsAPIResponse = z.object({
  id: z.number(),
  cast: z.array(CastSchema),
  crew: z.array(
    z.object({
      adult: z.boolean(),
      gender: z.number(),
      id: z.number(),
      known_for_department: z.string(),
      name: z.string(),
      original_name: z.string(),
      popularity: z.number(),
      profile_path: z.string().nullable().optional(),
      credit_id: z.string(),
      department: z.string(),
      job: z.string(),
    })
  ),
});

// peliculas recomendadas
export const RecommendedMovieSchema = z.object({
  backdrop_path: z.string(),
  id: z.number(),
  title: z.string(),
  original_title: z.string(),
  overview: z.string(),
  poster_path: z.string(),
  media_type: z.string(),
  adult: z.boolean(),
  original_language: z.string(),
  genre_ids: z.array(z.number()),
  popularity: z.number(),
  release_date: z.string(),
  video: z.boolean(),
  vote_average: z.number(),
  vote_count: z.number(),
});

export const RecommendedMovieAPIResponse = z.object({
  page: z.number(),
  results: z.array(RecommendedMovieSchema),
  total_pages: z.number(),
  total_results: z.number(),
});
