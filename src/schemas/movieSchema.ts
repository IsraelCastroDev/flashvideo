import { boolean, z } from "zod";

export const MovieSchema = z.object({
  adult: boolean(),
  backdrop_path: z.string().nullable().optional(),
  genre_ids: z.array(z.number()).nullable().optional(),
  id: z.number(),
  original_language: z.string(),
  original_title: z.string(),
  overview: z.string(),
  poster_path: z.string().nullable().optional(),
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
  vote_count: z.number().nullable().optional(),
  character: z.string().nullable().optional(),
  credit_id: z.string().nullable().optional(),
  order: z.number().nullable().optional(),
});

export const MovieAPIResponse = z.object({
  page: z.number(),
  results: z.array(MovieSchema),
  total_pages: z.number(),
  total_results: z.number(),
});

// cast

export const PersonSchema = z.object({
  adult: z.boolean(),
  also_known_as: z.array(z.string()).default([]).nullable().optional(),
  biography: z.string().nullable().optional(),
  birthday: z.string(),
  deathday: z.string().nullable().optional(),
  gender: z.number(),
  homepage: z.string().nullable().optional(),
  id: z.number(),
  imdb_id: z.string(),
  known_for_department: z.string(),
  name: z.string(),
  place_of_birth: z.string(),
  popularity: z.number(),
  profile_path: z.string().nullable().optional(),
});

export const CastMemberSchema = z.object({
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
  cast: z.array(CastMemberSchema),
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

export const RecommendedMovieAPIResponse = z.object({
  page: z.number(),
  results: z.array(MovieSchema),
  total_pages: z.number(),
  total_results: z.number(),
});

export const MovieCreditsAPIResponse = z.object({
  cast: z.array(MovieSchema),
  id: z.number(),
});

// KEYWORDS
export const KeyWordsSchemaAPIResponse = z.object({
  id: z.number(),
  keywords: z.array(
    z.object({
      id: z.number(),
      name: z.string(),
    })
  ),
});
