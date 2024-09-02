import { useQuery } from "@tanstack/react-query";
import {
  getTVSerie,
  getTVSerieCredits,
  getTVSerieKeywords,
  getTVSerieRecommendations,
  getTVSerieVideos,
} from "../../api/tvSeries";

export function useTVSerieDetails(id: number) {
  const tvSerieQuery = useQuery({
    queryKey: ["tvSerie", id],
    queryFn: () => {
      if (id === undefined) return Promise.resolve(null);
      return getTVSerie(id);
    },
    enabled: id !== undefined,
  });

  const tvSerieCreditsQuery = useQuery({
    queryKey: ["tvSerieCredits", id],
    queryFn: () => {
      if (id === undefined) return Promise.resolve(null);
      return getTVSerieCredits(id);
    },
    enabled: id !== undefined,
  });

  const tvSerieVideosQuery = useQuery({
    queryKey: ["tvSerieVideos", id],
    queryFn: () => {
      if (id === undefined) return Promise.resolve(null);
      return getTVSerieVideos(id);
    },
    enabled: id !== undefined,
  });

  const tvSerieRecommendationsQuery = useQuery({
    queryKey: ["tvSerieRecommendations", id],
    queryFn: () => {
      if (id === undefined) return Promise.resolve(null);
      return getTVSerieRecommendations(id);
    },
    enabled: id !== undefined,
  });

  const tvSerieKeywordsQuery = useQuery({
    queryKey: ["tvSerieKeywords", id],
    queryFn: () => {
      if (id === undefined) return Promise.resolve(null);
      return getTVSerieKeywords(id);
    },
    enabled: id !== undefined,
  });

  return {
    tvSerieQuery,
    tvSerieCreditsQuery,
    tvSerieVideosQuery,
    tvSerieRecommendationsQuery,
    tvSerieKeywordsQuery,
  };
}
