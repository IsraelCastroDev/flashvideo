import { useAppStore } from "../../store/useAppStore";
import { Movie } from "../../types";

export function useFiltersMovies(movies: Movie[] | undefined) {
  const filters = useAppStore((state) => state.filters);

  const filterPopularMovies = (movies: Movie[]): Movie[] => {
    return movies
      .slice() // Para crear una copia del array original antes de ordenar
      .sort((a, b) => {
        if (filters === "releaseDateAsc") {
          return (
            new Date(a.release_date ? a.release_date : new Date()).getTime() -
            new Date(b.release_date ? b.release_date : new Date()).getTime()
          );
        }

        if (filters === "releaseDateDesc") {
          return (
            new Date(b.release_date ? b.release_date : new Date()).getTime() -
            new Date(a.release_date ? a.release_date : new Date()).getTime()
          );
        }

        if (filters === "titleAZ") {
          return a.title!.localeCompare(b.title ? b.title : "No title");
        }

        if (filters === "titleZA") {
          return b.title!.localeCompare(a.title ? a.title : "No title");
        }

        return 0; // Si no coincide con ninguno de los filtros anteriores
      });
  };

  // Solo filtrar si hay películas disponibles
  const filteredPopularMovies: Movie[] = movies
    ? filterPopularMovies(movies)
    : [];

  return {
    filteredPopularMovies,
  };
}
