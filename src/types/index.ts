import { z } from "zod";
import {
  PersonSchema,
  MovieSchema,
  CastMemberSchema,
  MovieCreditsAPIResponse,
  CreditsAPIResponse,
  RecommendedMovieAPIResponse,
  KeyWordsSchemaAPIResponse,
} from "../schemas/movieSchema";

export type Movie = z.infer<typeof MovieSchema>;
export type CastMember = z.infer<typeof CastMemberSchema>;
export type MovieCredits = z.infer<typeof MovieCreditsAPIResponse>;
export type CreditsResponse = z.infer<typeof CreditsAPIResponse>;
export type RecommendationsResponse = z.infer<
  typeof RecommendedMovieAPIResponse
>;
export type KeywordsResponse = z.infer<typeof KeyWordsSchemaAPIResponse>;

// person
export type Person = z.infer<typeof PersonSchema>;
