import { toast } from "react-toastify";
import Loader from "@components/ui/Loader/Loader";
import { useFilterUpcomingMovies } from "../../../hooks/filters/useSiltersMovies";
import { useMovies } from "../../../hooks/movies/useMovies";
import MovieCard from "@components/PageComponents/Movie/MovieCard";

function UpcomingMovies() {
  const { upcommingMoviesQuery } = useMovies();
  const { data: upcommingMovies, isLoading, isError } = upcommingMoviesQuery;

  const { filteredUpcomingMovies } = useFilterUpcomingMovies(
    upcommingMovies?.results
  );

  if (isLoading) return <Loader />;
  if (isError) return toast.error("No se pudo cargar la información");

  return (
    <section className="flex-1">
      {filteredUpcomingMovies && (
        <ul className="grid grid-cols-[repeat(auto-fit,_minmax(180px,_1fr))] gap-5">
          {filteredUpcomingMovies.length > 0 ? (
            filteredUpcomingMovies.map((movie) => {
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
export default UpcomingMovies;
