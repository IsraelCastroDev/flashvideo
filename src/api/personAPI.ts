import { PersonSchema } from "../schemas/personSchema";
import { Person } from "../types";
import { api } from "./axios";

export const getDetailsByPerson = async (id: Person["id"]) => {
  const { data } = await api(`/person/${id}`);
  const validateData = PersonSchema.safeParse(data);

  if (validateData.success) {
    return validateData.data;
  }
};