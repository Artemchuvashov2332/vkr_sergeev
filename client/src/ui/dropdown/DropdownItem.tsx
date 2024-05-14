import React, { FC } from "react";
import "./Dropdown.style.css";

export const DropdownItem: FC<{
  item: React.ReactNode;
  onClick: () => void;
}> = ({ item, onClick }) => {
  return (
    <li className="dropdown_content-list-item" onClick={onClick}>
      {item}
    </li>
  );
};
