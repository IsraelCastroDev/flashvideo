import {
  CreditsAPIResponse,
  TVSerieKeywordsResponse,
  TVSerieRecommendationsAPIResponse,
  TVSeriesSchema,
  VideosAPIResponse,
} from "../schemas/movieSchema";
import { api } from "./axios";

export const getTVSerie = async (id: number) => {
  const { data } = await api(`/tv/${id}`);
  const validateData = TVSeriesSchema.safeParse(data);

  if (validateData.success) {
    return validateData.data;
  }
};

export const getTVSerieCredits = async (id: number) => {
  const { data } = await api(`/tv/${id}/credits`);
  const validateData = CreditsAPIResponse.safeParse(data);

  if (validateData.success) {
    return validateData.data;
  }
};

export const getTVSerieVideos = async (id: number) => {
  const { data } = await api(`/tv/${id}/videos`);
  const validateData = VideosAPIResponse.safeParse(data);

  if (validateData.success) {
    return validateData.data;
  }
};

export const getTVSerieRecommendations = async (id: number) => {
  const { data } = await api(`/tv/${id}/recommendations`);
  const validateData = TVSerieRecommendationsAPIResponse.safeParse(data);

  if (validateData.success) {
    return validateData.data;
  }
};

export const getTVSerieKeywords = async (id: number) => {
  const { data } = await api(`/tv/${id}/keywords`);
  const validateData = TVSerieKeywordsResponse.safeParse(data);

  if (validateData.success) {
    return validateData.data;
  }
};
