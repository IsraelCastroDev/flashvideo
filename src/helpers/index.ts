import { Collection, Movie, Person, TVSerie } from "@/types";

export const getYear = (date: string) => {
  return new Date(date).getFullYear();
};

export const formatDate = (date: string): string => {
  if (!date) return "";

  const dateParam = new Date(date);

  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "short",
    day: "numeric",
  };
  return new Intl.DateTimeFormat("es-MX", options).format(dateParam);
};

export const convertStringToSlug = (str: string): string => {
  if (str)
    return str
      .trim()
      .normalize("NFD")
      .replace(/ /g, "-") // Reemplaza todos los espacios con guiones
      .replace(/:/g, "") // Reemplaza todos los dos puntos con vacío
      .replace(/!/g, "") // Reemplaza todos los dos puntos con vacío
      .replace(/¡/g, "") // Reemplaza todos los dos puntos con vacío
      .replace(/¡/g, "") // Reemplaza todos los dos puntos con vacío
      .replace(/&/g, "y") // Reemplaza todos los dos puntos con vacío
      .replace(/&&/g, "y") // Reemplaza "&&" con "y"
      .replace(/:/g, "") // Elimina todos los dos puntos
      .replace(/[/#]/g, "") // Elimina otros caracteres especiales, por ejemplo, "/", "#"
      .replace(/\s+/g, "-")
      .toLowerCase();

  return "";
};

export const calculateAge = (dateStr: string): number => {
  const [year, month, day] = dateStr.split("-").map(Number);
  const birthDate = new Date(year, month - 1, day);
  const today = new Date();

  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDifference = today.getMonth() - birthDate.getMonth();

  // Si no ha cumplido años este año
  if (
    monthDifference < 0 ||
    (monthDifference === 0 && today.getDate() < birthDate.getDate())
  ) {
    age--;
  }

  return age;
};

export function addTypeToResults<
  T extends Movie | Person | Collection | TVSerie
>(results: T[], type_identifier: string): T[] & { type_identifier: string }[] {
  return results.map((result) => ({ ...result, type_identifier }));
}

export function filterMovies(
  movies: Movie[] | undefined,
  sort: string,
  genreFilterId: number | null
): Movie[] {
  if (!movies) return [];

  return movies
    .slice() // Para crear una copia del array original antes de ordenar
    .sort((a, b) => {
      if (sort === "releaseDateAsc") {
        return (
          new Date(a.release_date ? a.release_date : new Date()).getTime() -
          new Date(b.release_date ? b.release_date : new Date()).getTime()
        );
      }

      if (sort === "releaseDateDesc") {
        return (
          new Date(b.release_date ? b.release_date : new Date()).getTime() -
          new Date(a.release_date ? a.release_date : new Date()).getTime()
        );
      }

      if (sort === "titleAZ") {
        return a.title!.localeCompare(b.title ? b.title : "No title");
      }

      if (sort === "titleZA") {
        return b.title!.localeCompare(a.title ? a.title : "No title");
      }

      return 0; // Si no coincide con ninguno de los filtros anteriores
    })
    .filter((movie) => {
      if (genreFilterId) {
        return movie.genre_ids?.includes(genreFilterId);
      }

      return true;
    });
}

export function filterTVSeries(
  tvSeries: TVSerie[] | undefined,
  sort: string,
  genreFilterId: number | null
): TVSerie[] {
  if (!tvSeries) return [];

  return tvSeries
    .slice() // Para crear una copia del array original antes de ordenar
    .sort((a, b) => {
      if (sort === "releaseDateAsc") {
        return (
          new Date(a.first_air_date ? a.first_air_date : new Date()).getTime() -
          new Date(b.first_air_date ? b.first_air_date : new Date()).getTime()
        );
      }

      if (sort === "releaseDateDesc") {
        return (
          new Date(b.first_air_date ? b.first_air_date : new Date()).getTime() -
          new Date(a.first_air_date ? a.first_air_date : new Date()).getTime()
        );
      }

      if (sort === "titleAZ") {
        return a.name!.localeCompare(b.name ? b.name : "No name");
      }

      if (sort === "titleZA") {
        return b.name!.localeCompare(a.name ? a.name : "No name");
      }

      return 0; // Si no coincide con ninguno de los filtros anteriores
    })
    .filter((tvSerie) => {
      if (genreFilterId) {
        return tvSerie.genre_ids?.includes(genreFilterId);
      }

      return true;
    });
}
