import { filterTVSeries } from "@/helpers";
import { useAppStore } from "@/store/useAppStore";
import { TVSerie } from "@/types";

export function useFilterPopularTVSeries(tvSeries: TVSerie[] | undefined) {
  const sort = useAppStore((state) => state.sort);
  const genreFilterId = useAppStore((state) => state.genreFilterId);

  const filteredPopularTvSeries = tvSeries
    ? filterTVSeries(tvSeries, sort, genreFilterId)
    : tvSeries || [];

  return { filteredPopularTvSeries };
}

export function useFilterTopRatedTVSeries(tvSeries: TVSerie[] | undefined) {
  const sort = useAppStore((state) => state.sort);
  const genreFilterId = useAppStore((state) => state.genreFilterId);

  const filteredTopRatedTvSeries = tvSeries
    ? filterTVSeries(tvSeries, sort, genreFilterId)
    : tvSeries || [];

  return { filteredTopRatedTvSeries };
}

export function useFilterAiringTodayTVSeries(tvSeries: TVSerie[] | undefined) {
  const sort = useAppStore((state) => state.sort);
  const genreFilterId = useAppStore((state) => state.genreFilterId);

  const filteredUpcomingTvSeries = tvSeries
    ? filterTVSeries(tvSeries, sort, genreFilterId)
    : tvSeries || [];

  return { filteredUpcomingTvSeries };
}

export function useFiltersOnTheAirTVSeries(tvSeries: TVSerie[] | undefined) {
  const sort = useAppStore((state) => state.sort);
  const genreFilterId = useAppStore((state) => state.genreFilterId);

  const filteredOnTheAirTvSeries = tvSeries
    ? filterTVSeries(tvSeries, sort, genreFilterId)
    : tvSeries || [];

  return { filteredOnTheAirTvSeries };
}
