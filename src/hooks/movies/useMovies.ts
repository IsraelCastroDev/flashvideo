import { useQuery } from "@tanstack/react-query";
import {
  getMoviesTopRated,
  getPopularMovies,
  getUpcomingReleaseMovies,
} from "@/api/moviesAPI";
import { addTypeToResults } from "@/helpers";
import { getGenres } from "@/api/genres";
import { useAppStore } from "@/store/useAppStore";

export function useMovies() {
  const setGenres = useAppStore((state) => state.setGenres);

  const popularMoviesQuery = useQuery({
    queryKey: ["popular"],
    queryFn: async () => {
      const data = await getPopularMovies();
      const modifiedData = addTypeToResults(data!.results, "movie");
      return {
        ...data,
        results: modifiedData,
        page: data?.page ?? 1,
        total_pages: data?.total_pages ?? 1,
        total_results: data?.total_results ?? 0,
      };
    },
  });

  const topRatedMoviesQuery = useQuery({
    queryKey: ["topRated"],
    queryFn: async () => {
      const data = await getMoviesTopRated();
      const modifiedData = addTypeToResults(data!.results, "movie");
      return {
        ...data,
        results: modifiedData,
        page: data?.page ?? 1,
      };
    },
  });

  const upcommingMoviesQuery = useQuery({
    queryKey: ["upcoming"],
    queryFn: async () => {
      const data = await getUpcomingReleaseMovies();
      const modifiedData = addTypeToResults(data!.results, "movie");
      return {
        ...data,
        results: modifiedData,
        page: data?.page ?? 1,
        total_pages: data?.total_pages ?? 1,
      };
    },
  });

  const genresMoviesQuery = useQuery({
    queryKey: ["genres"],
    queryFn: getGenres,
  });

  if (genresMoviesQuery.data) setGenres(genresMoviesQuery.data.genres);

  return {
    popularMoviesQuery,
    topRatedMoviesQuery,
    upcommingMoviesQuery,
  };
}
