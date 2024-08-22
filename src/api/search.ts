import { MultiAPIResponse } from "../schemas/movieSchema";
import { api } from "./axios";

export const getSearchMultiResults = async (query: string) => {
  const { data } = await api(`/search/multi?query=${query}`);
  const validateData = MultiAPIResponse.safeParse(data);

  console.log(data);

  console.log("data-zod----->", validateData);

  if (validateData.success) {
    return validateData.data;
  } else {
    console.log(validateData.error.message.toString());
  }
};
