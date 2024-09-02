import { GenreAPIResponse } from "../schemas/movieSchema";
import { api } from "./axios";

export const getGenres = async () => {
  const { data } = await api("/genre/movie/list");
  const validateData = GenreAPIResponse.safeParse(data);

  if (validateData.success) {
    return validateData.data;
  }
};
