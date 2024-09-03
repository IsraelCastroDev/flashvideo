import { toast } from "react-toastify";
import Loader from "@components/ui/Loader/Loader";
import { useFilterTopRatedMovies } from "@/hooks/filters/useSiltersMovies";
import { useMovies } from "@/hooks/movies/useMovies";
import MovieCard from "@components/PageComponents/Movie/MovieCard";

function TopRatedMoviesPage() {
  const { topRatedMoviesQuery } = useMovies();
  const { data: topRatedMovies, isLoading, isError } = topRatedMoviesQuery;

  const { filteredTopRatedMovies } = useFilterTopRatedMovies(
    topRatedMovies?.results
  );

  if (isLoading) return <Loader />;
  if (isError) return toast.error("No se pudo cargar la información");

  return (
    <section className="flex-1">
      {filteredTopRatedMovies && (
        <ul className="grid grid-cols-[repeat(auto-fit,_minmax(180px,_1fr))] gap-5">
          {filteredTopRatedMovies.length > 0 ? (
            filteredTopRatedMovies.map((movie) => {
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
export default TopRatedMoviesPage;
