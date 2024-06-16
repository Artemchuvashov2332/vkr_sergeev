import { FC } from "react";
import { Navigation } from "..";
import { Dropdown, DropdownItem } from "../../ui";
import { useNavigate } from "react-router-dom";
import { RouterPaths } from "../../constants";
import { useAppSelector } from "../../store";
import { ILinkItem } from "../../types";
import "./Navbar.style.css";

const tabs: ILinkItem[] = [
  {
    text: "Распродажа",
    refTo: RouterPaths.SALES,
  },
  {
    text: "Новинки",
    refTo: RouterPaths.NEW_ITEMS,
  },
  {
    text: "Оплата",
    refTo: RouterPaths.PAYMENT,
  },
  {
    text: "Доставка",
    refTo: RouterPaths.DELIVERY,
  },
  {
    text: "Контакты",
    refTo: RouterPaths.ABOUT,
  },
];

export const Navbar: FC = () => {
  const navigate = useNavigate();
  const { items: options } = useAppSelector((state) => state.categories);

  const onDropdownClickHandler = () => {
    console.debug("sdfsdf");
    navigate(RouterPaths.MAIN);
  };

  const onDropdownItemClickHandler = (value: string) => {
    console.debug("object");
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
        onClick={onDropdownClickHandler}
      >
        {options.map(({ id, code, title }) => (
          <DropdownItem
            key={id}
            item={title}
            onClick={() => onDropdownItemClickHandler(code)}
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
