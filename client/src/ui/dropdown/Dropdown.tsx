import { FC, useState } from "react";
import { IOptions } from "../../types";
import { IDropdownProps } from "./Dropdown.types";
import "./Dropdown.style.css";

export const Dropdown: FC<IDropdownProps> = ({ title, options }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<IOptions | null>(null);

  const toggleHandler = () => setIsOpen((state) => !state);

  const onOptionClickHandler = (option: IOptions) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <div
      className="dropdown_wrapper"
      onMouseEnter={toggleHandler}
      onMouseLeave={toggleHandler}
    >
      <div className="dropdown_header">{selectedOption?.label || title}</div>
      {isOpen && (
        <div className="dropdown_list-container">
          <ul className="dropdown_list-content">
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
