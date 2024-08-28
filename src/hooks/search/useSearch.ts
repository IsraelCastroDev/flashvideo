import { useQuery } from "@tanstack/react-query";
import {
  getSearchCollections,
  getSearchKeywords,
  getSearchMovies,
  getSearchMultiResults,
  getSearchPerson,
  getSearchTv,
} from "../../api/search";
import { addTypeToResults } from "../../helpers";

export function useSearch(query: string) {
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
    queryFn: async () => {
      if (query === undefined || query === "") return Promise.resolve(null);
      const data = await getSearchPerson(query);
      const modifiedData = addTypeToResults(data!.results, "person");

      return {
        ...data,
        results: modifiedData,
        page: data?.page ?? 1,
        total_pages: data?.total_pages ?? 1,
        total_results: data?.total_results ?? 0,
      };
    },
    enabled: query !== undefined,
  });

  const movieSearchQuery = useQuery({
    queryKey: ["searchMovie"],
    queryFn: async () => {
      if (query === undefined || query === "") return Promise.resolve(null);
      const data = await getSearchMovies(query);
      const modifiedData = addTypeToResults(data!.results, "movie");
      return {
        ...data,
        results: modifiedData,
        page: data?.page ?? 1,
        total_pages: data?.total_pages ?? 1,
        total_results: data?.total_results ?? 0,
      };
    },
    enabled: query !== undefined,
  });

  const tvSearchQuery = useQuery({
    queryKey: ["searchTv"],
    queryFn: async () => {
      if (query === undefined || query === "") return Promise.resolve(null);
      const data = await getSearchTv(query);
      const modifiedData = addTypeToResults(data!.results, "tv");

      return {
        ...data,
        results: modifiedData,
        page: data?.page ?? 1,
        total_pages: data?.total_pages ?? 1,
        total_results: data?.total_results ?? 0,
      };
    },
    enabled: query !== undefined,
  });

  const keywordSearchQuery = useQuery({
    queryKey: ["keywordSearch"],
    queryFn: async () => {
      if (query === undefined || query === "") return Promise.resolve(null);
      const data = await getSearchKeywords(query);
      const modifiedData = addTypeToResults(data!.results, "keyword");

      return {
        ...data,
        results: modifiedData,
        page: data?.page ?? 1,
        total_pages: data?.total_pages ?? 1,
        total_results: data?.total_results ?? 0,
      };
    },
    enabled: query !== undefined,
  });

  const collectionSearchQuery = useQuery({
    queryKey: ["collectionSearch"],
    queryFn: async () => {
      if (query === undefined || query === "") return Promise.resolve(null);
      const data = await getSearchCollections(query);
      const modifiedData = addTypeToResults(data!.results, "collection");

      return {
        ...data,
        results: modifiedData,
        page: data?.page ?? 1,
        total_pages: data?.total_pages ?? 1,
        total_results: data?.total_results ?? 0,
      };
    },
    enabled: query !== undefined,
  });

  return {
    searchQuery,
    personSearchQuery,
    movieSearchQuery,
    tvSearchQuery,
    keywordSearchQuery,
    collectionSearchQuery,
  };
}
