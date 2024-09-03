import {
  CollectionAPIResponse,
  KeyWordsSearchSchemaAPIResponse,
  MovieAPIResponse,
  MultiAPIResponse,
  PersonSearchSchema,
  TVSeriesAPIResponse,
} from "@/schemas/movieSchema";
import { api } from "./axios";

export const getSearchMultiResults = async (query: string) => {
  const { data } = await api(`/search/multi?query=${query}`);
  const validateData = MultiAPIResponse.safeParse(data);

  if (validateData.success) {
    return validateData.data;
  }
};

export const getSearchPerson = async (query: string) => {
  const { data } = await api(`/search/person?query=${query}`);
  const validateData = PersonSearchSchema.safeParse(data);

  if (validateData.success) {
    return validateData.data;
  }
};

export const getSearchMovies = async (query: string) => {
  const { data } = await api(`/search/movie?query=${query}`);
  const validateData = MovieAPIResponse.safeParse(data);

  if (validateData.success) {
    return validateData.data;
  }
};

export const getSearchTv = async (query: string) => {
  const { data } = await api(`/search/tv?query=${query}`);
  const validateData = TVSeriesAPIResponse.safeParse(data);

  if (validateData.success) {
    return validateData.data;
  }
};

export const getSearchKeywords = async (query: string) => {
  const { data } = await api(`/search/keyword?query=${query}`);
  const validateData = KeyWordsSearchSchemaAPIResponse.safeParse(data);

  if (validateData.success) {
    return validateData.data;
  }
};

export const getSearchCollections = async (query: string) => {
  const { data } = await api(`/search/collection?query=${query}`);
  const validateData = CollectionAPIResponse.safeParse(data);

  if (validateData.success) {
    return validateData.data;
  }
};
