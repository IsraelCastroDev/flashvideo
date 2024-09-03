import { z } from "zod";
import { PersonSchema, PersonSchemaWithType } from "./personSchema";
import { MovieSchema, MovieSchemaWithType } from "./movieSchema";
import { TVSeriesSchema, TVSeriesSchemaWithType } from "./tvSerieSchema";
import { CollectionSchema, CollectionSchemaWithType } from "./collectionSchema";

export const ResultSearchSchema = z.union([
  PersonSchema,
  MovieSchema,
  TVSeriesSchema,
  CollectionSchema,
]);

export const ResultSearchSchemaWithType = z.union([
  PersonSchemaWithType,
  MovieSchemaWithType,
  TVSeriesSchemaWithType,
  CollectionSchemaWithType,
]);

export const MultiAPIResponse = z.object({
  page: z.number(),
  results: z.array(ResultSearchSchema),
  total_pages: z.number(),
  total_results: z.number(),
});

export const MultiAPIResponseWithType = z.object({
  page: z.number(),
  results: z.array(ResultSearchSchemaWithType),
  total_pages: z.number(),
  total_results: z.number(),
});
