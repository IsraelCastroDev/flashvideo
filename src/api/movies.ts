import {
  CreditsAPIResponse,
  MovieAPIResponse,
  MovieSchema,
  RecommendedMovieAPIResponse,
} from "../schemas/movieSchema";
import { Movie } from "../types";
import { api } from "./axios";

const API_KEY = import.meta.env.VITE_API_KEY;

export const getPopularMovies = async () => {
  const { data } = await api(
    `/movie/popular?api_key=${API_KEY}&language=es-MX`
  );
  const validateData = MovieAPIResponse.safeParse(data);

  if (validateData.success) {
    return validateData.data;
  }
};

export const getMovieById = async (id: Movie["id"]) => {
  const { data } = await api(`/movie/${id}?api_key=${API_KEY}&language=es-MX`);
  const validateData = MovieSchema.safeParse(data);

  if (validateData.success) {
    return validateData.data;
  }
};

export const getCreditsByMovie = async (id: Movie["id"]) => {
  const { data } = await api(
    `/movie/${id}/credits?api_key=${API_KEY}&language=es-MX`
  );
  const validateData = CreditsAPIResponse.safeParse(data);

  if (validateData.success) {
    return validateData.data;
  }
};

export const getMovieRecommendations = async (id: Movie["id"]) => {
  const { data } = await api(
    `/movie/${id}/recommendations?api_key=${API_KEY}&language=es-MX`
  );
  const validateData = RecommendedMovieAPIResponse.safeParse(data);

  if (validateData.success) {
    return validateData.data;
  }
};
