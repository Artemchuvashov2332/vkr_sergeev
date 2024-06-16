import React, { FC } from "react";
import "./Dropdown.style.css";

export const DropdownItem: FC<{
  item: React.ReactNode;
  onClick: () => void;
}> = ({ item, onClick }) => {
  const onClickHanler = (e: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
    e.preventDefault();
    e.stopPropagation();
    onClick();
  };

  return (
    <li className="dropdown_content-list-item" onClick={onClickHanler}>
      {item}
    </li>
  );
};
