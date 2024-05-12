import { FC } from "react";
import { Link } from "react-router-dom";
import { INavigationProps } from "./Navigation.types";

export const Navigation: FC<INavigationProps> = ({
  links,
  listClassName = "",
  itemClassName = "",
}) => {
  return (
    <nav>
      <ul className={listClassName}>
        {links.map(({ text, refTo }) => (
          <li key={text} className={itemClassName}>
            <Link to={refTo}>{text}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
