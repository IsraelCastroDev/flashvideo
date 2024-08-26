// import { useQuery } from "@tanstack/react-query";
// import { getTVSerie } from "../../api/tvSeries";

// export function useTVSerie(id: number) {
//   const tvSerieQuery = useQuery({
//     queryKey: ["tvSerie", id],
//     queryFn: () => {
//       if (id === undefined) return Promise.resolve(null);
//       return getTVSerie(id);
//     },
//     enabled: id !== undefined,
//   });

//   return { tvSerieQuery };
// }
