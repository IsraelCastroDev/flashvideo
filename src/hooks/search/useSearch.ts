import { useQuery } from "@tanstack/react-query";
import { getSearchMultiResults, getSearchPerson } from "../../api/search";
// import { useState } from "react";

export function useSearch(query: string) {
  // const [enabled, setEnabled] = useState(false);

  const searchQuery = useQuery({
    queryKey: ["search"],
    queryFn: () => {
      if (query === undefined || query === "") return Promise.resolve(null);
      return getSearchMultiResults(query);
    },
    enabled: query !== undefined,
  });

  const personSearchQuery = useQuery({
    queryKey: ["personSearch"],
    queryFn: () => {
      if (query === undefined || query === "") return Promise.resolve(null);
      return getSearchPerson(query);
    },
    enabled: query !== undefined,
  });

  // const handleEnabled = () => {
  //   setEnabled(true);
  // };
  // console.log("hookkkk", enabled);

  return { searchQuery, personSearchQuery };
}
