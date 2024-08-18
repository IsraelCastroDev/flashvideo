import { useQuery } from "@tanstack/react-query";
import { getPopularMovies } from "../api/movies";
import Carousel from "../components/ui/Carousel";

function HomePage() {
  const { data, isLoading } = useQuery({
    queryFn: getPopularMovies,
    queryKey: ["popular"],
  });

  if (isLoading) return <p>Cargando...</p>;

  const popularMovies = data?.results ?? [];
  const hasMovies = popularMovies.length > 0;

  return (
    <>
      <section>
        <h2 className="text-2xl font-bold">Películas populares</h2>

        <ul className="mt-5">
          {hasMovies ? (
            <Carousel movies={popularMovies} />
          ) : (
            <p>No hay pelis</p>
          )}
        </ul>
      </section>
    </>
  );
}
export default HomePage;
