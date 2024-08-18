import { z } from "zod";
import {
  CastSchema,
  MovieSchema,
  RecommendedMovieSchema,
} from "../schemas/movieSchema";

export type Movie = z.infer<typeof MovieSchema>;
export type Cast = z.infer<typeof CastSchema>;
export type RecommendedMovie = z.infer<typeof RecommendedMovieSchema>;
