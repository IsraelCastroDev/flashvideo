import { useQueries } from "@tanstack/react-query";
import { Person } from "../types";
import {
  getDetailsByPerson,
  getMovieCreditsFromPerson,
} from "../api/personAPI";

export function usePerson(personId: Person["id"]) {
  const result = useQueries({
    queries: [
      {
        queryKey: ["person", personId],
        queryFn: () => {
          if (personId === undefined) return Promise.resolve(null);
          return getDetailsByPerson(personId);
        },
        enabled: personId !== undefined,
      },
      {
        queryKey: ["personMovieCredits", personId],
        queryFn: () => {
          if (personId === undefined) return Promise.resolve(null);
          return getMovieCreditsFromPerson(personId);
        },
      },
    ],
  });

  const [personQuery, movieCreditsQuery] = result;

  return { personQuery, movieCreditsQuery };
}
