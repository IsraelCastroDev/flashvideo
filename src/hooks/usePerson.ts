import { useQuery } from "@tanstack/react-query";
import { Person } from "../types";
import { getDetailsByPerson } from "../api/personAPI";

export function usePerson(personId: Person["id"]) {
  const person = useQuery({
    queryKey: ["person", personId],
    queryFn: () => {
      if (personId === undefined) return Promise.resolve(null);
      return getDetailsByPerson(personId);
    },
    enabled: personId !== undefined,
  });

  return person;
}
