import { MultiAPIResponse, PersonSearchSchema } from "../schemas/movieSchema";
import { api } from "./axios";

export const getSearchMultiResults = async (query: string) => {
  const { data } = await api(`/search/multi?query=${query}`);
  const validateData = MultiAPIResponse.safeParse(data);

  if (validateData.success) {
    return validateData.data;
  } else {
    console.log(validateData.error.message.toString());
  }
};

export const getSearchPerson = async (query: string) => {
  const { data } = await api(`/search/person?query=${query}`);
  const validate = PersonSearchSchema.safeParse(data);
  console.log(data);
  console.log(validate);

  if (validate.success) {
    return validate.data;
  }
};
