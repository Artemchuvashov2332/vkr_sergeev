import { FC } from "react";
import "./Sorting.style.css";

export const Sorting: FC = () => {
  return (
    <div className="sorting">
      <label className="sorting_label" htmlFor="sort_select">
        Сортировать
      </label>

      <select id="sort_select">
        <option label="Цена по возростанию" value="price_up">
          По цене
        </option>
        <option label="Цена по убыванию" value="price_down">
          Цена по убыванию
        </option>
        <option label="По рейтингу" value="raiting">
          По рейтингу
        </option>
        <option label="По наименованию" value="name">
          По наименованию
        </option>
      </select>
    </div>
  );
};
