import _ from "lodash";

export const getSortedItem = <T>(
  item: T[],
  field: string = "id",
  direction: "DESC" | "ASC" = "ASC"
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

export const parseData = (inputData) => {
  const output: Record<string, any> = {};

  Object.keys(inputData).forEach((key) => {
    _.set(output, key, inputData[key]);
  });

  return output;
};
