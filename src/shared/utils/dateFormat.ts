export function dateFormatter(date: Date, separator = "-") {
  const dateInstance = new Date(date);
  const year = dateInstance.getFullYear();
  const month = dateInstance.getMonth() + 1;
  const day = dateInstance.getDate();

  return `${day}${separator}${month.toString().padStart(2, "0")}${separator}${year}`;
}
