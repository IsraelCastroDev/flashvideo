import { z } from "zod";

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
