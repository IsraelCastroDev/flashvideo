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
      .replace(/&&/g, "y") // Reemplaza "&&" con "y"
      .replace(/ /g, "-") // Reemplaza todos los espacios con guiones
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
