import { useQuery } from "@tanstack/react-query";
import { getCollection } from "@/api/collectionAPI";

export function useCollection(id: number) {
  const collectionQuery = useQuery({
    queryKey: ["collection", id],
    queryFn: async () => {
      if (id === undefined) return Promise.resolve(null);
      const data = await getCollection(id);
      return {
        ...data,
        id: id ?? 0,
        type_identifier: "collection",
        adult: data?.adult ?? false,
        name: data?.name ?? "",
      };
    },
    enabled: id !== undefined,
  });

  return { collectionQuery };
}
