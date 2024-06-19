export const getSortedItem = <T>(
  item: T[],
  field: string,
  direction: "DESC" | "ASC"
) => {
  return item.sort((a, b) => {
    const first = a[field];
    const second = b[field];

    const isString = typeof first === "string" && typeof second === "string";
    const sort = {
      DESC: isString ? second.localeCompare(first) : second - first,
      ASC: isString ? first.localeCompare(second) : first - second,
    };

    return sort[direction];
  });
};
