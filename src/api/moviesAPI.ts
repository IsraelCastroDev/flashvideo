import {
  CreditsAPIResponse,
  KeyWordsSchemaAPIResponse,
  MovieAPIResponse,
  MovieRatedAPISchema,
  MovieSchema,
  RecommendedMovieAPIResponse,
  UpcommingMoviesAPISchema,
  VideosAPIResponse,
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

export const getKeyWordsByMovie = async (id: Movie["id"]) => {
  const { data } = await api(`/movie/${id}/keywords`);
  const validateData = KeyWordsSchemaAPIResponse.safeParse(data);

  if (validateData.success) {
    return validateData.data;
  }
};

export const getMoviesTopRated = async () => {
  const { data } = await api(`/movie/top_rated`);
  const validateData = MovieRatedAPISchema.safeParse(data);

  if (validateData.success) {
    return validateData.data;
  }
};

export const getUpcomingReleaseMovies = async () => {
  const { data } = await api("/movie/upcoming");
  const validateData = UpcommingMoviesAPISchema.safeParse(data);

  if (validateData.success) {
    return validateData.data;
  }
};

// ---------VIDEOS
export const getVideosOfTheMovie = async (id: Movie["id"]) => {
  const { data } = await api(`/movie/${id}/videos`);
  const validateData = VideosAPIResponse.safeParse(data);

  if (validateData.success) {
    return validateData.data;
  } else {
    validateData.error.message.toString();
  }
};
