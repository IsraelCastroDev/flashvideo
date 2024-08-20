import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import Loader from "../../components/ui/Loader/Loader";
import { useMovieDetails } from "../../hooks/movies/useMoviesDetails";
import { getYear } from "../../helpers";
import Carousel from "../../components/ui/Carousel";

function MoviePage() {
  const { id } = useParams<{ id?: string }>();
  const movieId = id ? Number(id) : 0;

  const { movieQuery, creditsQuery, keyWordsQuery, recommendationsQuery } =
    useMovieDetails(movieId);

  const {
    data: movie,
    isLoading: isLoadingMovie,
    isError: isErrorMovie,
  } = movieQuery;
  const {
    data: credits,
    isLoading: isLoadingCredits,
    isError: isErrorCredits,
  } = creditsQuery;
  const {
    data: keywords,
    isLoading: isLoadingKeyWords,
    isError: isErrorKeyWords,
  } = keyWordsQuery;
  const {
    data: recommendations,
    isLoading: isLoadingRecommendations,
    isError: isErrorRecommendations,
  } = recommendationsQuery;

  if (
    isLoadingMovie ||
    isLoadingCredits ||
    isLoadingRecommendations ||
    isLoadingKeyWords
  )
    return <Loader />;

  if (
    isErrorMovie ||
    isErrorCredits ||
    isErrorRecommendations ||
    isErrorKeyWords
  )
    return toast.error("No se pudo cargar la información de la película");

  if (!movie) return <p>No se encontró la película</p>;

  return (
    <>
      <section className="md:relative">
        <div>
          <div
            className={`bg-center bg-cover bg-no-repeat h-72 md:h-[calc(100vh-70px)] relative block opacity-45`}
            style={{
              backgroundImage: `url("${
                movie.backdrop_path !== null
                  ? `${
                      import.meta.env.VITE_IMAGE_URL
                    }/w1920_and_h800_multi_faces${movie.backdrop_path}`
                  : "https://img.freepik.com/free-photo/movie-background-collage_23-2149876006.jpg"
              }")`,
            }}
          ></div>

          <div className="md:absolute md:top-[10%] md:px-10">
            <div className="md:flex md:justify-center md:items-center">
              <div className="md:w-1/3">
                <img
                  src={
                    movie.poster_path !== null
                      ? `${import.meta.env.VITE_IMAGE_URL}/w200${
                          movie.poster_path
                        }`
                      : "https://img.freepik.com/free-photo/movie-background-collage_23-2149876006.jpg"
                  }
                  alt={`Poster de ${movie.title}`}
                  className="block w-32 h-40 md:w-72 md:h-1/2 top-1/3 left-64 -translate-x-48 -translate-y-1/2 md:-translate-x-0 md:translate-y-0 absolute rounded-xl md:static"
                />
              </div>

              <div className="mt-4 px-4 md:w-2/3">
                <div>
                  <h1 className="text-center md:text-left text-xl md:text-4xl font-bold md:font-black">
                    {movie.title}{" "}
                    <span className="font-semibold">
                      ({getYear(movie.release_date)})
                    </span>
                  </h1>
                  <p className="font-semibold">{movie.release_date}</p>
                </div>

                <div className="mt-2">
                  <h3 className="text-xl font-bold">Vista general</h3>

                  <div>
                    <p className="text-pretty font-semibold mt-2">
                      {movie.overview}
                    </p>
                  </div>

                  <ol className="grid grid-cols-2 gap-3 mt-4">
                    {credits?.crew.slice(0, 4).map((c) => (
                      <li key={c.credit_id}>
                        <h3 className="font-black">{c.original_name}</h3>
                        <p>{c.known_for_department}</p>
                      </li>
                    ))}
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 md:px-10 py-2 mt-4 lg:flex">
        <div className="lg:w-2/3 md:space-y-3">
          <div>
            <h3 className="text-xl font-bold md:text-2xl">Reparto</h3>
            <div className="mt-2">
              {credits?.cast && <Carousel data={credits?.cast} />}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold md:text-2xl">Recomendaciones</h3>
            <div className="mt-2">
              {recommendations?.results && (
                <Carousel data={recommendations.results} />
              )}
            </div>
          </div>
        </div>

        <aside className="lg:w-1/3 pl-4 shadow-box-shadow-left shadow-box-shadow">
          <h3 className="text-xl font-bold md:text-2xl">Palabras claves</h3>

          <div className="flex w-full flex-wrap justify-start gap-2 mt-2">
            {keywords?.keywords.map((keyword) => (
              <div key={keyword.id} className="bg-gray-300 p-4 rounded-md">
                <p className="font-semibold">{keyword.name}</p>
              </div>
            ))}
          </div>
        </aside>
      </section>
    </>
  );
}

export default MoviePage;
