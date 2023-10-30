export function formatDate(date) {
  if (date === "Present") return date;
  const [year, month] = date.split("-");
  return `${month}/${year}`;
}

export function isEmpty(item) {
  if (Array.isArray(item) && item.length > 0) return item.some((i) => !i);
  if (Array.isArray(item) && item.length === 0) return true;
  return item === "";
}
