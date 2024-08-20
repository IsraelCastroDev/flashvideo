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
  if (str) return str.trim().replaceAll(" ", "-").toLocaleLowerCase();
  return "";
};
