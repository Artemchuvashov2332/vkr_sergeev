import { FC, Fragment } from "react";
import { IListProps } from "./List.types";
import { getClass } from "../../utils";
import "./List.style.css";

export const List = <T extends { id: number }>({
  items,
  modifiers = "",
  renderItem,
}: IListProps<T>) => {
  const className = getClass("list", modifiers);

  return (
    <div className={className}>
      {items.map((item, index) => (
        <Fragment key={item.id}>{renderItem(item, index)}</Fragment>
      ))}
    </div>
  );
};
