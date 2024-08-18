import { useQuery } from "@tanstack/react-query";
import { Movie } from "../types";
import { getMovieById } from "../api/moviesAPI";

export function useMovie(movieId: Movie["id"]) {
  const movie = useQuery({
    queryKey: ["movie", movieId],
    queryFn: () => {
      if (movieId === undefined) return Promise.resolve(null);
      return getMovieById(movieId);
    },
    enabled: movieId !== undefined,
  });

  return movie;
}
