import { z } from "zod";

export const MovieSchema = z
  .object({
    adult: z.boolean(),
    first_air_date: z.string().nullable().optional(),
    backdrop_path: z.string().nullable(),
    genre_ids: z.array(z.number()).nullable().optional(),
    original_country: z.array(z.string()).nullable().optional(),
    id: z.number(),
    name: z.string().nullable().optional(),
    media_type: z.string().nullable().optional(),
    original_language: z.string().nullable().optional(),
    original_title: z.string().nullable().optional(),
    original_name: z.string().nullable().optional(),
    overview: z.string().nullable(),
    poster_path: z.string().nullable(),
    release_date: z.string().nullable().optional(), // Puede ser opcional si no siempre está presente
    title: z.string().nullable().optional(), // Puede ser opcional si no siempre está presente
    vote_average: z.number().nullable().optional(),
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
  })
  .passthrough();

export const MovieAPIResponse = z.object({
  page: z.number(),
  results: z.array(MovieSchema),
  total_pages: z.number(),
  total_results: z.number(),
});

export const MovieSchemaWithType = MovieSchema.extend({
  type_identifier: z.string().nullable().optional(),
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
  cast_id: z.number().optional(),
  character: z.string(),
  credit_id: z.string(),
  order: z.number(),
});

export const CastMemberSchemaWithType = CastMemberSchema.extend({
  type_identifier: z.string().nullable().optional(),
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

// MOVIES TOP RATED
export const MovieRatedAPISchema = z.object({
  page: z.number(),
  results: z.array(MovieSchema),
});

// UPCOMING MOVIES
export const UpcommingMoviesAPISchema = z.object({
  dates: z.object({
    maximum: z.string(),
    minimum: z.string(),
  }),
  page: z.number(),
  results: z.array(MovieSchema),
  total_pages: z.number(),
});

// ----------VIDEOS
export const VideoSchema = z.object({
  iso_639_1: z.string(),
  iso_3166_1: z.string(),
  name: z.string(),
  key: z.string(),
  site: z.string(),
  size: z.number(),
  type: z.string(),
  official: z.boolean(),
  published_at: z.string(),
  id: z.string(),
});

export const VideosAPIResponse = z.object({
  id: z.number(),
  results: z.array(VideoSchema),
});

//GENRES

export const GenreSchema = z.object({
  id: z.number(),
  name: z.string(),
});

export const GenreAPIResponse = z.object({
  genres: z.array(GenreSchema),
});
