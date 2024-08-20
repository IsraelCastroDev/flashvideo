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
      .replace(/ /g, "-") // Reemplaza todos los espacios con guiones
      .replace(/:/g, "") // Reemplaza todos los dos puntos con vacío
      .replace(/&&/g, "y") // Reemplaza "&&" con "y"
      .replace(/ /g, "-") // Reemplaza todos los espacios con guiones
      .replace(/:/g, "") // Elimina todos los dos puntos
      .replace(/[/#]/g, "") // Elimina otros caracteres especiales, por ejemplo, "/", "#"
      .replace(/\s+/g, "-")
      .toLowerCase();

  return "";
};
