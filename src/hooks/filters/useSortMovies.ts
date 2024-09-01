import { useAppStore } from "../../store/useAppStore";
import { Movie } from "../../types";

export function useSortMovies(movies: Movie[] | undefined) {
  const sort = useAppStore((state) => state.sort);

  const filterPopularMovies = (movies: Movie[]): Movie[] => {
    const result = movies
      .slice() // Para crear una copia del array original antes de ordenar
      .sort((a, b) => {
        if (sort === "releaseDateAsc") {
          return (
            new Date(a.release_date ? a.release_date : new Date()).getTime() -
            new Date(b.release_date ? b.release_date : new Date()).getTime()
          );
        }

        if (sort === "releaseDateDesc") {
          return (
            new Date(b.release_date ? b.release_date : new Date()).getTime() -
            new Date(a.release_date ? a.release_date : new Date()).getTime()
          );
        }

        if (sort === "titleAZ") {
          return a.title!.localeCompare(b.title ? b.title : "No title");
        }

        if (sort === "titleZA") {
          return b.title!.localeCompare(a.title ? a.title : "No title");
        }

        return 0; // Si no coincide con ninguno de los filtros anteriores
      });

    return result;
  };

  // Solo filtrar si hay películas disponibles y si se ha hecho clic en "Buscar"
  const filteredPopularMovies: Movie[] = movies
    ? filterPopularMovies(movies)
    : movies || [];

  return { filteredPopularMovies };
}
