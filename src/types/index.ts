import { z } from "zod";
import {
  PersonSchema,
  MovieSchema,
  CastMemberSchema,
} from "../schemas/movieSchema";

export type Movie = z.infer<typeof MovieSchema>;
export type CastMember = z.infer<typeof CastMemberSchema>;

// person
export type Person = z.infer<typeof PersonSchema>;
