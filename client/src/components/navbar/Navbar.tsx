import { FC } from "react";
import { Navigation } from "..";
import { INavbarProps } from "./Navbar.types";
import { Dropdown, DropdownItem } from "../../ui";
import { categoryOptions } from "../../__mocks__";
import "./Navbar.style.css";
import { useNavigate } from "react-router-dom";
import { RouterPaths } from "../../constants";

export const Navbar: FC<INavbarProps> = ({ tabs }) => {
  const navigate = useNavigate();

  const onDropdownClickHandler = (value: string) => {
    navigate(
      RouterPaths.productTypeByCategory({
        category: value,
      })
    );
  };

  return (
    <div className="main-navbar_wrapper">
      <Dropdown
        title="Каталог товаров"
        modifiers="main-navbar-category-droppdown"
        memuModifiers="wide-menu"
      >
        {categoryOptions.map(({ id, label, value }) => (
          <DropdownItem
            key={id}
            item={label}
            onClick={() => onDropdownClickHandler(value)}
          />
        ))}
      </Dropdown>
      <Navigation
        links={tabs}
        listClassName="main-navbar"
        itemClassName="main-navbar_item"
      />
    </div>
  );
};
