export const getYear = (date: string): number => {
  return new Date(date).getFullYear();
};

export const formatDate = (date: string): string => {
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "short",
    day: "numeric",
  };
  return new Intl.DateTimeFormat("es-MX", options).format(new Date(date));
};
