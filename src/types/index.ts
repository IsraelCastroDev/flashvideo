import { z } from "zod";
import {
  PersonSchema,
  MovieSchema,
  CastMemberSchema,
  MovieCreditsAPIResponse,
  CreditsAPIResponse,
  RecommendedMovieAPIResponse,
  KeyWordsSchemaAPIResponse,
  VideoSchema,
  MultiAPIResponse,
  TVSeriesSchema,
  KeywordSchema,
  TVSerieRecommendationsAPIResponse,
  TVSerieKeywordsResponse,
  CollectionSchema,
  MultiAPIResponseWithType,
  PersonSchemaWithType,
  CollectionSchemaWithType,
  TVSeriesSchemaWithType,
  CastMemberSchemaWithType,
  GenreSchema,
} from "@/schemas/movieSchema";

export type Movie = z.infer<typeof MovieSchema>;
export interface MovieWithType extends Movie {
  type_identifier: string;
}

export type Collection = z.infer<typeof CollectionSchema>;
export type CollectionWithType = z.infer<typeof CollectionSchemaWithType>;

export type TVSerie = z.infer<typeof TVSeriesSchema>;
export type TVSerieWithType = z.infer<typeof TVSeriesSchemaWithType>;

export type CastMember = z.infer<typeof CastMemberSchema>;
export type CastMemberWithType = z.infer<typeof CastMemberSchemaWithType>;

export type MovieCredits = z.infer<typeof MovieCreditsAPIResponse>;
export type CreditsResponse = z.infer<typeof CreditsAPIResponse>;
export type RecommendationsResponse = z.infer<
  typeof RecommendedMovieAPIResponse
>;

export type TVSerieRecommendationsResponse = z.infer<
  typeof TVSerieRecommendationsAPIResponse
>;
export type KeywordsResponse = z.infer<typeof KeyWordsSchemaAPIResponse>;
export type TVSerieKeywordsResponse = z.infer<typeof TVSerieKeywordsResponse>;

// person
export type Person = z.infer<typeof PersonSchema>;
export type PersonWithType = z.infer<typeof PersonSchemaWithType>;

// video
export type Video = z.infer<typeof VideoSchema>;

// search
export type Multi = z.infer<typeof MultiAPIResponse>;
export type MultiWithType = z.infer<typeof MultiAPIResponseWithType>;
export type SearchResultWithType =
  | MovieWithType
  | PersonWithType
  | CollectionWithType
  | TVSerieWithType;
export type SearchResult = Movie | Person | Collection | TVSerie;

export type Keyword = z.infer<typeof KeywordSchema>;

// genres
export type Genre = z.infer<typeof GenreSchema>;
