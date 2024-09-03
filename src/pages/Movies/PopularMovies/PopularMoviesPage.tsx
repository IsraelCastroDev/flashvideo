import { toast } from "react-toastify";
import { useMovies } from "../../../hooks/movies/useMovies";
import MovieCard from "@components/PageComponents/Movie/MovieCard";
import Loader from "@components/ui/Loader/Loader";
import { useFiltersMovies } from "../../../hooks/filters/useSiltersMovies";

function MoviesPage() {
  const { popularMoviesQuery } = useMovies();

  const { data: popularMovies, isLoading, isError } = popularMoviesQuery;

  const { filteredPopularMovies } = useFiltersMovies(popularMovies?.results);

  if (isLoading) return <Loader />;
  if (isError) return toast.error("No se pudo cargar la información");

  return (
    <section className="flex-1">
      {filteredPopularMovies && (
        <ul className="grid grid-cols-[repeat(auto-fit,_minmax(180px,_1fr))] gap-5">
          {filteredPopularMovies.length > 0 ? (
            filteredPopularMovies.map((movie) => {
              return <MovieCard movie={movie} key={movie.id} />;
            })
          ) : (
            <li>No se encontró la información</li>
          )}
        </ul>
      )}
    </section>
  );
}
export default MoviesPage;
