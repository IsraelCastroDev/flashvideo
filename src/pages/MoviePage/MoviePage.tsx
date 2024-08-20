import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import Loader from "../../components/ui/Loader/Loader";
import { useMovieDetails } from "../../hooks/movies/useMoviesDetails";
import MovieDetails from "../../components/Movie/MovieDetails";
import RelatedInformationAboutMovie from "../../components/Movie/RelatedInformationAboutMovie";

function MoviePage() {
  const { id } = useParams<{ id?: string }>();
  const idMovieSplit = id?.split("-")[0];

  const movieId = idMovieSplit !== undefined ? Number(idMovieSplit) : 0;

  const {
    movieQuery,
    creditsQuery,
    keyWordsQuery,
    recommendationsQuery,
    videosOfMoviesQuery,
  } = useMovieDetails(movieId);

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
  const {
    data: videosOfMovie,
    isLoading: isLoadingVideos,
    isError: isErrorVideos,
  } = videosOfMoviesQuery;

  if (
    isLoadingMovie ||
    isLoadingCredits ||
    isLoadingRecommendations ||
    isLoadingKeyWords ||
    isLoadingVideos
  )
    return <Loader />;

  if (
    isErrorMovie ||
    isErrorCredits ||
    isErrorRecommendations ||
    isErrorKeyWords ||
    isErrorVideos
  )
    return toast.error("No se pudo cargar la información de la película");

  if (!movie) return <p>No se encontró la película</p>;

  return (
    <>
      {credits && videosOfMovie && movie && (
        <MovieDetails
          credits={credits}
          movie={movie}
          videos={videosOfMovie.results}
        />
      )}
      {credits && keywords && recommendations && (
        <RelatedInformationAboutMovie
          credits={credits}
          keywords={keywords}
          recommendations={recommendations}
        />
      )}
    </>
  );
}

export default MoviePage;
