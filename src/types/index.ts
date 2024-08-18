import { z } from "zod";
import {
  CastSchema,
  MovieSchema,
  RecommendedMovieSchema,
} from "../schemas/movieSchema";
import { PersonSchema } from "../schemas/personSchema";

export type Movie = z.infer<typeof MovieSchema>;
export type Cast = z.infer<typeof CastSchema>;
export type RecommendedMovie = z.infer<typeof RecommendedMovieSchema>;

// person
export type Person = z.infer<typeof PersonSchema>;
