import { FC } from "react";
import { IHeaderProps } from "./Header.types";
import "./Header.style.css";
import { Dropdown } from "..";

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

  return (
    <header className="app-header">
      <nav className="app-header-navs">
        <ul className="app-header_link-list">
          {navLinks.map(({ text }) => (
            <li>
              <a>{text}</a>
            </li>
          ))}
        </ul>
        <div className="app-header-user-section">
          <span>Закладки</span>
          <Dropdown title="Личный кабинет" options={options} />
        </div>
      </nav>
    </header>
  );
};
