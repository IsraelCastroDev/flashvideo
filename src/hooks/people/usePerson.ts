import { useQuery } from "@tanstack/react-query";
import { getPopularPerson } from "@/api/personAPI";

export function usePerson() {
  const popularPersonsQuery = useQuery({
    queryKey: ["popularPersons"],
    queryFn: getPopularPerson,
  });

  return { popularPersonsQuery };
}
