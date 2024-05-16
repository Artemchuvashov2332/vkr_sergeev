import React from "react";
import { ModifiersType } from "../../utils";

export interface IListProps<T> {
  items: T[];
  renderItem: (item: T, index: number) => React.ReactNode;
  modifiers?: ModifiersType;
  noDataText?: string;
}
