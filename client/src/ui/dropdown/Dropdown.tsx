import { FC, useState } from "react";
import { IOptions } from "../../types";
import { IDropdownProps } from "./Dropdown.types";
import "./Dropdown.style.css";
import { getClass } from "../../utils";

export const Dropdown: FC<IDropdownProps> = ({
  title,
  options,
  modifiers,
  memuModifiers,
  onItemClick = () => {},
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<IOptions | null>(null);

  const toggleHandler = () => setIsOpen((state) => !state);

  const onOptionClickHandler = (option: IOptions) => {
    setSelectedOption(option);
    setIsOpen(false);
    onItemClick(option);
  };

  const mainClassName = getClass("dropdown_wrapper", modifiers);
  const memuClassName = getClass("dropdown_list-content", memuModifiers);

  return (
    <div
      className={mainClassName}
      onMouseEnter={toggleHandler}
      onMouseLeave={toggleHandler}
    >
      <div className="dropdown_header">{selectedOption?.label || title}</div>
      {isOpen && (
        <div className="dropdown_list-container">
          <ul className={memuClassName}>
            {options.map(({ id, label, value }) => (
              <li
                key={id}
                className="dropdown_content-list-item"
                onClick={() => onOptionClickHandler({ label, value })}
              >
                {label}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
