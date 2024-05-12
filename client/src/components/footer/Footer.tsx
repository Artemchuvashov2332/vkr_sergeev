import { FC } from "react";
import { IFooterProps } from "./Footer.types";
import "./Footer.style.css";
import { AppContainer } from "../appContainer";

export const Footer: FC<IFooterProps> = ({ navLinks }) => {
  return (
    <div className="app-footer-wrapper">
      <AppContainer>
        <footer className="app-footer">
          <nav className="app-footer-navs">
            <ul className="app-footer_link-list">
              {navLinks.map(({ text }) => (
                <li className="app-footer_link-list-item">
                  <a>{text}</a>
                </li>
              ))}
            </ul>
          </nav>
        </footer>
      </AppContainer>
    </div>
  );
};
