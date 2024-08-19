import { useQuery } from "@tanstack/react-query";
import {
  getMoviesTopRated,
  getPopularMovies,
  getUpcomingReleaseMovies,
} from "../../api/moviesAPI";

export function useMovies() {
  const popularMoviesQuery = useQuery({
    queryKey: ["popular"],
    queryFn: getPopularMovies,
  });

  const topRatedMoviesQuery = useQuery({
    queryKey: ["topRated"],
    queryFn: getMoviesTopRated,
  });

  const upcommingMoviesQuery = useQuery({
    queryKey: ["upcoming"],
    queryFn: getUpcomingReleaseMovies,
  });

  return { popularMoviesQuery, topRatedMoviesQuery, upcommingMoviesQuery };
}
