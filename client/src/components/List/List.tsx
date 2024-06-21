import { Fragment } from "react";
import { IListProps } from "./List.types";
import { getClass } from "../../utils";
import "./List.style.css";

export const List = <T extends { id: number }>({
  items = [],
  modifiers = "",
  noDataText = "Усп, таких товаров не нашлось",
  renderItem,
}: IListProps<T>) => {
  const className = getClass("list", modifiers);

  if (!items.length) {
    return <h3 style={{ margin: 10 }}>{noDataText}</h3>;
  }

  return (
    <div className={className}>
      {items.map((item, index) => (
        <Fragment key={item.id}>{renderItem(item, index)}</Fragment>
      ))}
    </div>
  );
};
