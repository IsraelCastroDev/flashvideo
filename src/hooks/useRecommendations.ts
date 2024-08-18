import { useQuery } from "@tanstack/react-query";
import { Movie } from "../types";
import { getMovieRecommendations } from "../api/moviesAPI";

export function useRecommendations(movieId: Movie["id"]) {
  const recommendations = useQuery({
    queryKey: ["recommendations", movieId],
    queryFn: () => {
      if (movieId === undefined) return Promise.resolve(null);
      return getMovieRecommendations(movieId);
    },
    enabled: movieId !== undefined,
  });

  return recommendations;
}
