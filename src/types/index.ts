import { z } from "zod";
import { MovieSchema } from "../schemas/movieSchema";

export type Movie = z.infer<typeof MovieSchema>;
