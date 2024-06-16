export type APIResponceWithCount<T> = {
  count: number;
  rows: T[];
};
