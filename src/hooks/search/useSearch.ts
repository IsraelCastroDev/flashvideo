import { useQuery } from "@tanstack/react-query";
import { getSearchMultiResults } from "../../api/search";

export function useSearch(query: string) {
  const searchQuery = useQuery({
    queryKey: ["search"],
    queryFn: () => {
      if (query === undefined || query === "") return Promise.resolve(null);
      return getSearchMultiResults(query);
    },
    enabled: query !== undefined,
  });

  return { searchQuery };
}
