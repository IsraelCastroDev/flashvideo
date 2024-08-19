import { useQuery } from "@tanstack/react-query";
import {
  getCreditsByMovie,
  getKeyWordsByMovie,
  getMovieById,
  getMovieRecommendations,
} from "../../api/moviesAPI";
import { Movie } from "../../types";

export function useMovieDetails(movieId: Movie["id"]) {
  const movieQuery = useQuery({
    queryKey: ["movie", movieId],
    queryFn: () => {
      if (movieId === undefined) return Promise.resolve(null);
      return getMovieById(movieId);
    },
    enabled: movieId !== undefined,
  });

  const keyWordsQuery = useQuery({
    queryKey: ["keywords", movieId],
    queryFn: () => {
      if (movieId === undefined) return Promise.resolve(null);
      return getKeyWordsByMovie(movieId);
    },
    enabled: movieId !== undefined,
  });

  const creditsQuery = useQuery({
    queryKey: ["credits", movieId],
    queryFn: () => {
      if (movieId === undefined) return Promise.resolve(null);
      return getCreditsByMovie(movieId);
    },
    enabled: movieId !== undefined,
  });

  const recommendationsQuery = useQuery({
    queryKey: ["recommendations", movieId],
    queryFn: () => {
      if (movieId === undefined) return Promise.resolve(null);
      return getMovieRecommendations(movieId);
    },
    enabled: movieId !== undefined,
  });

  return {
    movieQuery,
    keyWordsQuery,
    creditsQuery,
    recommendationsQuery,
  };
}
