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
          <li key={text}>
            <Link to={refTo}>
              <p className={itemClassName}>{text}</p>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
