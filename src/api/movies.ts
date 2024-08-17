import { MovieAPIResponse } from "../schemas/movieSchema";
import { api } from "./axios";

export const getLatestMovies = async () => {
  const { data } = await api("/movie/popular");
  const validateData = MovieAPIResponse.safeParse(data);

  if (validateData.success) {
    return validateData.data;
  }
};
