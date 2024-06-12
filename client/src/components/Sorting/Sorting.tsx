import { FC, useState } from "react";
import { removeSorting, setSorting, useAppDispatch } from "../../store";
import "./Sorting.style.css";
import "../../ui/Button/Button.style.css";

interface SortingProps {
  sortKey: string;
}

export const Sorting: FC<SortingProps> = ({ sortKey }) => {
  const dispatch = useAppDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState("");

  const options = [
    { label: "Цена по возрастанию", value: "price_up" },
    { label: "Цена по убыванию", value: "price_down" },
    { label: "По рейтингу", value: "rating" },
    { label: "По наименованию", value: "name" },
  ];

  const onChangeHandler = (value: string) => {
    setSelectedValue(value);
    setIsOpen(false);
    dispatch(
      setSorting({
        key: sortKey,
        type: value,
      })
    );
  };

  const onResetHandler = () => {
    setSelectedValue("");
    dispatch(
      removeSorting({
        key: sortKey,
      })
    );
  };

  return (
    <div className="sorting">
      <label className="sorting_label">Сортировать</label>
      <div className="custom_select" onClick={() => setIsOpen(!isOpen)}>
        {selectedValue
          ? options.find((option) => option.value === selectedValue)?.label
          : "Выберите опцию"}
        <div className={`dropdown ${isOpen ? "open" : ""}`}>
          {options.map((option) => (
            <div
              key={option.value}
              className="dropdown_option"
              onClick={() => onChangeHandler(option.value)}
            >
              {option.label}
            </div>
          ))}
        </div>
      </div>
      <button className="button-white" onClick={onResetHandler}>
        Сбросить
      </button>
    </div>
  );
};
