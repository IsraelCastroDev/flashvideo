import { useQuery } from "@tanstack/react-query";
import {
  getCreditsByMovie,
  getKeyWordsByMovie,
  getMovieById,
  getMovieRecommendations,
  getVideosOfTheMovie,
} from "@/api/moviesAPI";
import { Movie } from "@/types";
import { addTypeToResults } from "@/helpers";

function tranformMovieData(data: Movie, movieId: number) {
  return {
    ...data,
    type_identifier: "movie",
    id: movieId ?? 0,
    adult: data?.adult ?? false,
    backdrop_path: data?.backdrop_path ?? "",
    overview: data?.overview ?? "",
    poster_path: data?.poster_path ?? "",
  };
}

export function useMovieDetails(movieId: Movie["id"]) {
  const movieQuery = useQuery({
    queryKey: ["movie", movieId],
    queryFn: async () => {
      if (movieId === undefined) return Promise.resolve(null);
      const data = await getMovieById(movieId);
      if (data) {
        return tranformMovieData(data, movieId);
      }

      return null;
    },
    enabled: movieId !== undefined,
  });

  const keyWordsQuery = useQuery({
    queryKey: ["keywords", movieId],
    queryFn: () => {
      if (movieId === undefined) return Promise.resolve(null);
      return getKeyWordsByMovie(movieId);
    },
    enabled: movieId !== undefined,
  });

  const creditsQuery = useQuery({
    queryKey: ["credits", movieId],
    queryFn: async () => {
      if (movieId === undefined) return Promise.resolve(null);
      const data = await getCreditsByMovie(movieId);
      const modifiedDataCast = addTypeToResults(data!.cast, "person");
      const modifiedDataCrew = addTypeToResults(data!.crew, "person");

      return {
        ...data,
        cast: modifiedDataCast,
        crew: modifiedDataCrew,
        id: movieId ?? 0,
      };
    },
    enabled: movieId !== undefined,
  });

  const recommendationsQuery = useQuery({
    queryKey: ["recommendations", movieId],
    queryFn: () => {
      if (movieId === undefined) return Promise.resolve(null);
      return getMovieRecommendations(movieId);
    },
    enabled: movieId !== undefined,
  });

  const videosOfMoviesQuery = useQuery({
    queryKey: ["videos", movieId],
    queryFn: () => {
      if (movieId === undefined) return Promise.resolve(null);
      return getVideosOfTheMovie(movieId);
    },
    enabled: movieId !== undefined,
  });

  return {
    movieQuery,
    keyWordsQuery,
    creditsQuery,
    recommendationsQuery,
    videosOfMoviesQuery,
  };
}
