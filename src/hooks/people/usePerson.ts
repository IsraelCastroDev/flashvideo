import { useQueries } from "@tanstack/react-query";
import { Person } from "../../types";
import {
  getDetailsByPerson,
  getMovieCreditsFromPerson,
} from "../../api/personAPI";

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
        queryKey: ["movieCreditsFromPerson", personId],
        queryFn: () => {
          if (personId === undefined) return Promise.resolve(null);
          return getMovieCreditsFromPerson(personId);
        },
        enabled: personId !== undefined,
      },
    ],
  });

  const [personQuery, movieCreditsFromPersonQuery] = result;

  return { personQuery, movieCreditsFromPersonQuery };
}
