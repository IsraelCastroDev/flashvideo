import Carousel from "../components/ui/Carousel";
import Loader from "../components/ui/Loader/Loader";
import { useMovies } from "../hooks/movies/useMovies";
import { toast } from "react-toastify";

function HomePage() {
  const { popularMoviesQuery, topRatedMoviesQuery, upcommingMoviesQuery } =
    useMovies();

  const {
    data: popularMovies,
    isLoading: isLoadingPopularMovies,
    isError: isErrorPopularMovies,
  } = popularMoviesQuery;

  const {
    data: topRatedMovies,
    isLoading: isLoadingTopRatedMovies,
    isError: isErrorTopRatedMovies,
  } = topRatedMoviesQuery;

  const {
    data: upcommingMovies,
    isLoading: isLoadingUpcommingMovies,
    isError: isErrorUpcommingMovies,
  } = upcommingMoviesQuery;

  if (
    isLoadingPopularMovies ||
    isLoadingTopRatedMovies ||
    isLoadingUpcommingMovies
  )
    return <Loader />;
  if (isErrorPopularMovies || isErrorTopRatedMovies || isErrorUpcommingMovies)
    return toast.error("No se pudo cargar la información");

  return (
    <>
      <section>
        <h2 className="text-2xl font-bold">Películas populares</h2>

        <ul className="mt-5">
          {popularMovies?.results !== undefined ? (
            <Carousel data={popularMovies.results} />
          ) : (
            <p>No hay pelis</p>
          )}
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold">Películas con mejor calificación</h2>
        <ul className="mt-5">
          {topRatedMovies?.results !== undefined && (
            <Carousel data={topRatedMovies.results} />
          )}
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold">Próximos estrenos</h2>
        <ul className="mt-5">
          {upcommingMovies?.results !== undefined && (
            <Carousel data={upcommingMovies.results} />
          )}
        </ul>
      </section>
    </>
  );
}
export default HomePage;
