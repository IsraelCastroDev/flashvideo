import {
  MovieCreditsAPIResponse,
  PersonSchema,
  PersonSearchSchema,
} from "../schemas/movieSchema";
import { Person } from "../types";
import { api } from "./axios";

export const getDetailsByPerson = async (id: Person["id"]) => {
  const { data } = await api(`/person/${id}`);
  const validateData = PersonSchema.safeParse(data);

  if (validateData.success) {
    return validateData.data;
  }
};

export const getPopularPerson = async () => {
  const { data } = await api("/person/popular");
  const validateData = PersonSearchSchema.safeParse(data);

  if (validateData.success) {
    return validateData.data;
  }
};

export const getMovieCreditsFromPerson = async (id: Person["id"]) => {
  const { data } = await api(`/person/${id}/movie_credits`);
  const validateData = MovieCreditsAPIResponse.safeParse(data);

  if (validateData.success) {
    return validateData.data;
  }
};
