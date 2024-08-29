import { useQueries } from "@tanstack/react-query";
import { Person } from "../../types";
import {
  getDetailsByPerson,
  getMovieCreditsFromPerson,
} from "../../api/personAPI";
import { addTypeToResults } from "../../helpers";

export function usePerson(personId: Person["id"]) {
  const result = useQueries({
    queries: [
      {
        queryKey: ["person", personId],
        queryFn: async () => {
          if (personId === undefined) return Promise.resolve(null);
          const data = await getDetailsByPerson(personId);
          return {
            ...data,
            type_identifier: "person",
            id: personId ?? 0,
            adult: data?.adult ?? false,
            name: data?.name ?? "",
          };
        },
        enabled: personId !== undefined,
      },
      {
        queryKey: ["movieCreditsFromPerson", personId],
        queryFn: async () => {
          if (personId === undefined) return Promise.resolve(null);
          const data = await getMovieCreditsFromPerson(personId);
          const modifiedData = addTypeToResults(data!.cast, "movie");
          return {
            ...data,
            cast: modifiedData,
            id: personId ?? 0,
          };
        },
        enabled: personId !== undefined,
      },
    ],
  });

  const [personQuery, movieCreditsFromPersonQuery] = result;

  return { personQuery, movieCreditsFromPersonQuery };
}
