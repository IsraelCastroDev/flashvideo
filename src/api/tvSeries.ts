import { TVSeriesSchema } from "../schemas/movieSchema";
import { api } from "./axios";

export const getTVSerie = async (id: number) => {
  const { data } = await api(`/tv/${id}`);
  const validateData = TVSeriesSchema.safeParse(data);

  console.log(data);
  console.log(validateData);

  if (validateData.success) {
    return validateData.data;
  }
};
