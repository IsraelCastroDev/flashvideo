import { toast } from "react-toastify";
import { useMovies } from "../../hooks/movies/useMovies";
import Loader from "../../components/ui/Loader/Loader";
import MovieCard from "../../components/PageComponents/Movie/MovieCard";

function MoviesPage() {
  const { popularMoviesQuery } = useMovies();

  const { data: popularMovies, isLoading, isError } = popularMoviesQuery;

  if (isLoading) return <Loader />;
  if (isError) return toast.error("No se pudo cargar la información");

  return (
    <section>
      {popularMovies && (
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {popularMovies?.results.length > 0 ? (
            popularMovies?.results.map((movie) => <MovieCard movie={movie} />)
          ) : (
            <li>No se encontró la información</li>
          )}
        </ul>
      )}
    </section>
  );
}
export default MoviesPage;
