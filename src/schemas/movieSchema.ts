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

export const MovieSchemaWithType = MovieSchema.extend({
  type_identifier: z.string().nullable().optional(),
});

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

export const MovieAPIResponse = z.object({
  page: z.number(),
  results: z.array(MovieSchema),
  total_pages: z.number(),
  total_results: z.number(),
});

// cast

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

// KEYWORDS
export const KeywordSchema = z.array(
  z.object({
    id: z.number(),
    name: z.string(),
  })
);

export const KeyWordsSchemaAPIResponse = z.object({
  id: z.number(),
  keywords: KeywordSchema,
});

export const KeyWordsSearchSchemaAPIResponse = z.object({
  page: z.number(),
  results: KeywordSchema,
  total_pages: z.number(),
  total_results: z.number(),
});

export const TVSerieKeywordsResponse = z.object({
  id: z.number(),
  results: KeywordSchema,
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

// TV SERIES
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

// SEARCH
export const ResultSearchSchema = z.union([
  PersonSchema,
  MovieSchema,
  TVSeriesSchema,
  CollectionSchema,
]);

export const ResultSearchSchemaWithType = z.union([
  PersonSchemaWithType,
  MovieSchemaWithType,
  TVSeriesSchemaWithType,
  CollectionSchemaWithType,
]);

export const MultiAPIResponse = z.object({
  page: z.number(),
  results: z.array(ResultSearchSchema),
  total_pages: z.number(),
  total_results: z.number(),
});

export const MultiAPIResponseWithType = z.object({
  page: z.number(),
  results: z.array(ResultSearchSchemaWithType),
  total_pages: z.number(),
  total_results: z.number(),
});

//GENRES

export const GenreSchema = z.object({
  id: z.number(),
  name: z.string(),
});

export const GenreAPIResponse = z.object({
  genres: z.array(GenreSchema),
});
