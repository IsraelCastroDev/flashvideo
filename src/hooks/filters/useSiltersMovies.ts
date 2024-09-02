import { filterMovies } from "../../helpers";
import { useAppStore } from "../../store/useAppStore";
import { Movie } from "../../types";

export function useFiltersMovies(movies: Movie[] | undefined) {
  const sort = useAppStore((state) => state.sort);
  const genreFilterId = useAppStore((state) => state.genreFilterId);

  const filteredPopularMovies: Movie[] = movies
    ? filterMovies(movies, sort, genreFilterId)
    : movies || [];

  return { filteredPopularMovies };
}

export function useFilterUpcomingMovies(movies: Movie[] | undefined) {
  const sort = useAppStore((state) => state.sort);
  const genreFilterId = useAppStore((state) => state.genreFilterId);

  const filteredUpcomingMovies: Movie[] = movies
    ? filterMovies(movies, sort, genreFilterId)
    : movies || [];

  return { filteredUpcomingMovies };
}

export function useFilterTopRatedMovies(movies: Movie[] | undefined) {
  const sort = useAppStore((state) => state.sort);
  const genreFilterId = useAppStore((state) => state.genreFilterId);

  const filteredTopRatedMovies: Movie[] = movies
    ? filterMovies(movies, sort, genreFilterId)
    : movies || [];

  return { filteredTopRatedMovies };
}
