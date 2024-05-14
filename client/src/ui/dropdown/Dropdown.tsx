import { Children, FC, PropsWithChildren, useState } from "react";
import { IDropdownProps } from "./Dropdown.types";
import { getClass } from "../../utils";
import "./Dropdown.style.css";

export const Dropdown: FC<IDropdownProps & PropsWithChildren> = ({
  title,
  modifiers,
  memuModifiers,
  children,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleHandler = () => setIsOpen((state) => !state);

  const onListClickHandler = () => setIsOpen(false);

  const mainClassName = getClass("dropdown_wrapper", modifiers);
  const memuClassName = getClass("dropdown_list-content", memuModifiers);

  return (
    <div
      className={mainClassName}
      onMouseEnter={toggleHandler}
      onMouseLeave={toggleHandler}
    >
      <div className="dropdown_header">{title}</div>
      {isOpen && (
        <div className="dropdown_list-container">
          <ul className={memuClassName} onClick={onListClickHandler}>
            {Children.map(children, (child) => (
              <>{child}</>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
