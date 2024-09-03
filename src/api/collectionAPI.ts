import { CollectionSchema } from "@/schemas/collectionSchema";
import { api } from "./axios";

export const getCollection = async (id: number) => {
  const { data } = await api(`/collection/${id}`);
  const validateData = CollectionSchema.safeParse(data);

  if (validateData) {
    return validateData.data;
  }
};
