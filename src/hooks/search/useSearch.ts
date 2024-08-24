import { useQuery } from "@tanstack/react-query";
import {
  getSearchCollections,
  getSearchKeywords,
  getSearchMovies,
  getSearchMultiResults,
  getSearchPerson,
  getSearchTv,
} from "../../api/search";
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

  const movieSearchQuery = useQuery({
    queryKey: ["searchMovie"],
    queryFn: () => {
      if (query === undefined || query === "") return Promise.resolve(null);
      return getSearchMovies(query);
    },
    enabled: query !== undefined,
  });

  const tvSearchQuery = useQuery({
    queryKey: ["searchTv"],
    queryFn: () => {
      if (query === undefined || query === "") return Promise.resolve(null);
      return getSearchTv(query);
    },
    enabled: query !== undefined,
  });

  const keywordSearchQuery = useQuery({
    queryKey: ["keywordSearch"],
    queryFn: () => {
      if (query === undefined || query === "") return Promise.resolve(null);
      return getSearchKeywords(query);
    },
    enabled: query !== undefined,
  });

  const collectionSearchQuery = useQuery({
    queryKey: ["collectionSearch"],
    queryFn: () => {
      if (query === undefined || query === "") return Promise.resolve(null);
      return getSearchCollections(query);
    },
    enabled: query !== undefined,
  });

  // const handleEnabled = () => {
  //   setEnabled(true);
  // };
  // console.log("hookkkk", enabled);

  return {
    searchQuery,
    personSearchQuery,
    movieSearchQuery,
    tvSearchQuery,
    keywordSearchQuery,
    collectionSearchQuery,
  };
}
