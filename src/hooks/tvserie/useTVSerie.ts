import { useQuery } from "@tanstack/react-query";
import {
  getAiringTodayTVSeries,
  getGenres,
  getOnTheAirTVSeries,
  getPopularTVSeries,
  getTopRatedTVSeries,
} from "@/api/tvSeriesAPI";
import { useAppStore } from "@/store/useAppStore";
import { addTypeToResults } from "@/helpers";

export function useTVSerie() {
  const setGenresTVSeries = useAppStore((state) => state.setGenresTVSeries);

  const popularTVSerieQuery = useQuery({
    queryKey: ["popularTVSerie"],
    queryFn: async () => {
      const data = await getPopularTVSeries();
      const modifiedData = addTypeToResults(data!.results, "tvSerie");

      return {
        ...data,
        results: modifiedData,
      };
    },
  });

  const topRatedTVSeriesQuery = useQuery({
    queryKey: ["topRatedTVSeries"],
    queryFn: async () => {
      const data = await getTopRatedTVSeries();
      const modifiedData = addTypeToResults(data!.results, "tvSerie");

      return {
        ...data,
        results: modifiedData,
      };
    },
  });

  const airingTodayTVSeriesQuery = useQuery({
    queryKey: ["airingTodayTVSeries"],
    queryFn: async () => {
      const data = await getAiringTodayTVSeries();
      const modifiedData = addTypeToResults(data!.results, "tvSerie");

      return {
        ...data,
        results: modifiedData,
      };
    },
  });

  const onTheAirTVSeriesQuery = useQuery({
    queryKey: ["onTheAirTVSeries"],
    queryFn: async () => {
      const data = await getOnTheAirTVSeries();
      const modifiedData = addTypeToResults(data!.results, "tvSerie");

      return {
        ...data,
        results: modifiedData,
      };
    },
  });

  const tvSeriesGenres = useQuery({
    queryKey: ["tvSeriesGenres"],
    queryFn: getGenres,
  });

  if (tvSeriesGenres.data) setGenresTVSeries(tvSeriesGenres.data.genres);

  return {
    popularTVSerieQuery,
    topRatedTVSeriesQuery,
    airingTodayTVSeriesQuery,
    onTheAirTVSeriesQuery,
  };
}
