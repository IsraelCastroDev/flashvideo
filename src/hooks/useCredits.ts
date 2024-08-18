import { useQuery } from "@tanstack/react-query";
import { Movie } from "../types";
import { getCreditsByMovie } from "../api/moviesAPI";

export function useCredits(movieId: Movie["id"]) {
  const credits = useQuery({
    queryKey: ["credits", movieId],
    queryFn: () => {
      if (movieId === undefined) return Promise.resolve(null);
      return getCreditsByMovie(movieId);
    },
    enabled: movieId !== undefined,
  });

  return credits;
}
