import { FC, PropsWithChildren } from "react";
import "./Filter.style.css";

interface FilterFieldProps extends PropsWithChildren {
  filterName?: string;
  title: string;
}

export const FilterField: FC<FilterFieldProps> = ({ title, children }) => {
  return (
    <section className="filter__section">
      <h5 className="filter__section-title">{title}</h5>
      <div className="filter__section-content">{children}</div>
    </section>
  );
};
