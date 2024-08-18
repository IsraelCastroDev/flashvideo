import { z } from "zod";

export const PersonSchema = z.object({
  adult: z.boolean(),
  also_known_as: z.array(z.string()),
  biography: z.string(),
  birthday: z.string(),
  deathday: z.null(),
  gender: z.number(),
  homepage: z.null(),
  id: z.number(),
  imdb_id: z.string(),
  known_for_department: z.string(),
  name: z.string(),
  place_of_birth: z.string(),
  popularity: z.number(),
  profile_path: z.string(),
});
