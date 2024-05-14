import { FC, Fragment } from "react";
import { IHeaderProps } from "./Header.types";
import { AppContainer, Dropdown, DropdownItem } from "../../ui";
import { Navigation } from "..";
import "./Header.style.css";

export const Header: FC<IHeaderProps> = ({ navLinks }) => {
  const options = [
    {
      id: 1,
      label: "Войти",
      value: "sign_in",
    },
    {
      id: 2,
      label: "Регистрация",
      value: "sign_up",
    },
  ];

  const onDropdownClickHandler = (value: string) => {
    console.debug(value);
  };

  return (
    <div className="app-header-wrapper">
      <AppContainer>
        <header className="app-header">
          <div className="app-header-navs">
            <Navigation
              links={navLinks}
              listClassName="app-header_link-list"
              itemClassName="app-header_link-list-item"
            />
            <div className="app-header-user-section">
              <span className="app-header-user-section-item">Закладки</span>
              <Dropdown title="Личный кабинет">
                {options.map(({ id, label, value }) => {
                  return (
                    <DropdownItem
                      key={id}
                      item={label}
                      onClick={() => onDropdownClickHandler(value)}
                    />
                  );
                })}
              </Dropdown>
            </div>
          </div>
        </header>
      </AppContainer>
    </div>
  );
};
