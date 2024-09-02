import { useQuery } from "@tanstack/react-query";
import {
  getAiringTodayTVSeries,
  getGenres,
  getOnTheAirTVSeries,
  getPopularTVSeries,
  getTopRatedTVSeries,
} from "../../api/tvSeries";
import { useAppStore } from "../../store/useAppStore";

export function useTVSerie() {
  const setGenresTVSeries = useAppStore((state) => state.setGenresTVSeries);

  const popularTVSerieQuery = useQuery({
    queryKey: ["popularTVSerie"],
    queryFn: getPopularTVSeries,
  });

  const topRatedTVSeriesQuery = useQuery({
    queryKey: ["topRatedTVSeries"],
    queryFn: getTopRatedTVSeries,
  });

  const airingTodayTVSeriesQuery = useQuery({
    queryKey: ["airingTodayTVSeries"],
    queryFn: getAiringTodayTVSeries,
  });

  const onTheAirTVSeriesQuery = useQuery({
    queryKey: ["onTheAirTVSeries"],
    queryFn: getOnTheAirTVSeries,
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
