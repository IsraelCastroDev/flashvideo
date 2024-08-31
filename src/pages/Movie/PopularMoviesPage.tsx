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
    <section className="flex-1">
      {popularMovies && (
        <ul className="grid grid-cols-[repeat(auto-fit,_minmax(180px,_1fr))] gap-5">
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
