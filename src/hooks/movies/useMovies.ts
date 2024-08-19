import { useQueries } from "@tanstack/react-query";
import {
  getCreditsByMovie,
  getKeyWordsByMovie,
  getMovieById,
  getMovieRecommendations,
} from "../../api/moviesAPI";
import { Movie } from "../../types";

export function useMovie(movieId: Movie["id"]) {
  const result = useQueries({
    queries: [
      {
        queryKey: ["movie", movieId],
        queryFn: () => {
          if (movieId === undefined) return Promise.resolve(null);
          return getMovieById(movieId);
        },
        enabled: movieId !== undefined,
      },
      {
        queryKey: ["keywords", movieId],
        queryFn: () => {
          if (movieId === undefined) return Promise.resolve(null);
          return getKeyWordsByMovie(movieId);
        },
        enabled: movieId !== undefined,
      },
      {
        queryKey: ["credits", movieId],
        queryFn: () => {
          if (movieId === undefined) return Promise.resolve(null);
          return getCreditsByMovie(movieId);
        },
        enabled: movieId !== undefined,
      },
      {
        queryKey: ["recommendations", movieId],
        queryFn: () => {
          if (movieId === undefined) return Promise.resolve(null);
          return getMovieRecommendations(movieId);
        },
        enabled: movieId !== undefined,
      },
    ],
  });

  const [movieQuery, keyWordsQuery, creditsQuery, recommendationsQuery] =
    result;

  return { movieQuery, keyWordsQuery, creditsQuery, recommendationsQuery };
}
