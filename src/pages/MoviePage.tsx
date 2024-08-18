import { useQuery } from "@tanstack/react-query";
import { getMovieById } from "../api/movies";
import { useParams } from "react-router-dom";

function MoviePage() {
  const { id } = useParams<{ id?: string }>(); // `id` puede ser `undefined`

  // Verifica si `id` es `undefined` antes de usarlo
  const movieId = id ? Number(id) : null;

  const {
    data: movie,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["movie", movieId],
    queryFn: () =>
      movieId ? getMovieById(movieId) : Promise.reject("ID no válido"),
    enabled: movieId !== null,
  });

  if (isLoading) return <p>Cargando...</p>;
  if (isError) return <p>Error</p>;

  if (!movie) return <p>No se encontró la película</p>;

  const year = new Date(movie.release_date).getFullYear();

  return (
    <>
      <section>
        <div
          className={`bg-center bg-cover bg-no-repeat h-72 relative block`}
          style={{
            backgroundImage: `url("${import.meta.env.VITE_IMAGE_URL}w500${
              movie.backdrop_path
            }")`,
          }}
        >
          <img
            src={`${import.meta.env.VITE_IMAGE_URL}w200${movie.poster_path}`}
            alt={`Poster de ${movie.title}`}
            className="block w-32 h-40 top-1/2 left-1/2 -translate-x-48 -translate-y-1/2 absolute rounded-xl"
          />
        </div>

        <div className="mt-4">
          <h1 className="text-center text-xl font-bold">
            {movie.title} <span className="font-semibold">({year})</span>
          </h1>
        </div>
      </section>
    </>
  );
}

export default MoviePage;
