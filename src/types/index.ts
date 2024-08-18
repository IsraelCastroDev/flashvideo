import { z } from "zod";
import { CastSchema, MovieSchema } from "../schemas/movieSchema";

export type Movie = z.infer<typeof MovieSchema>;
export type Cast = z.infer<typeof CastSchema>;
