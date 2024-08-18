import {
  CreditsAPIResponse,
  MovieAPIResponse,
  MovieSchema,
  RecommendedMovieAPIResponse,
} from "../schemas/movieSchema";
import { Movie } from "../types";
import { api } from "./axios";

export const getPopularMovies = async () => {
  const { data } = await api(`/movie/popular`);
  const validateData = MovieAPIResponse.safeParse(data);

  if (validateData.success) {
    return validateData.data;
  }
};

export const getMovieById = async (id: Movie["id"]) => {
  const { data } = await api(`/movie/${id}`);
  const validateData = MovieSchema.safeParse(data);

  if (validateData.success) {
    return validateData.data;
  }
};

export const getCreditsByMovie = async (id: Movie["id"]) => {
  const { data } = await api(`/movie/${id}/credits`);
  const validateData = CreditsAPIResponse.safeParse(data);

  console.log(validateData);

  if (validateData.success) {
    return validateData.data;
  }
};

export const getMovieRecommendations = async (id: Movie["id"]) => {
  const { data } = await api(`/movie/${id}/recommendations`);
  const validateData = RecommendedMovieAPIResponse.safeParse(data);

  if (validateData.success) {
    return validateData.data;
  }
};
