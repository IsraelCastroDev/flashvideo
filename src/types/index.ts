import { z } from "zod";
import {
  PersonSchema,
  MovieSchema,
  RecommendedMovieSchema,
} from "../schemas/movieSchema";

export type Movie = z.infer<typeof MovieSchema>;
export type RecommendedMovie = z.infer<typeof RecommendedMovieSchema>;

// person
export type Person = z.infer<typeof PersonSchema>;
