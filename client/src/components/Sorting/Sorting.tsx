import { FC } from "react";
import { setSorting, useAppDispatch } from "../../store";
import "./Sorting.style.css";

interface SortingProps {
  sortKey: string;
}

export const Sorting: React.FC<SortingProps> = ({ sortKey }) => {
  const dispatch = useAppDispatch();

  const options = [
    { label: "Цена по возрастанию", value: "price_up" },
    { label: "Цена по убыванию", value: "price_down" },
    { label: "По рейтингу", value: "rating" },
    { label: "По наименованию", value: "name" },
  ];

  const onChangeHandler = (event: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(
      setSorting({
        key: sortKey,
        type: event.target.value,
      })
    );
  };

  return (
    <div className="sorting">
      <label className="sorting_label" htmlFor="sort_select">
        Сортировать
      </label>
      <select
        id="sort_select"
        className="sort_select"
        onChange={onChangeHandler}
      >
        <option
          className="sort_option unvisible"
          disabled
          selected
          value=""
        ></option>
        {options?.map(({ label, value }) => (
          <option
            key={value}
            className="sort_option"
            label={label}
            value={value}
          >
            {label}
          </option>
        ))}
      </select>
    </div>
  );
};
