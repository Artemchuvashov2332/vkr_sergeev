import { FC, PropsWithChildren, useEffect } from "react";
import { removeFilter, setFilter, useAppDispatch } from "../../store";
import qs from "qs";
import { useSearch } from "../../utils";
import "./Filter.style.css";

interface FilterComponentProps extends PropsWithChildren {
  filterName: string;
  selectedValues: Record<string, unknown>;
  title?: string;
  buttonClasses?: string[];
  wrapClass?: string;
  onApplyFilter?: () => void;
  onResetFilter?: () => void;
}

export const FilterWrapper: FC<FilterComponentProps> = ({
  filterName,
  selectedValues,
  title = "Фильтр",
  wrapClass = "filter",
  buttonClasses = ["button-green", "button-border"],
  children,
  onApplyFilter,
  onResetFilter,
}) => {
  const dispatch = useAppDispatch();
  const [searchParams, setSearchParams] = useSearch();

  useEffect(() => {
    dispatch(
      setFilter({
        key: filterName,
        values: searchParams,
      })
    );

    return () => {
      dispatch(
        removeFilter({
          key: filterName,
        })
      );
    };
  }, []);

  const onApplyFilterHandler = () => {
    dispatch(
      setFilter({
        key: filterName,
        values: selectedValues,
      })
    );

    setSearchParams(qs.stringify(selectedValues, { arrayFormat: "brackets" }), {
      replace: true,
    });
    onApplyFilter?.();
  };

  const onResetFilteHandler = () => {
    dispatch(
      removeFilter({
        key: filterName,
      })
    );
    setSearchParams({}, { replace: true });
    onResetFilter?.();
  };

  return (
    <div className={wrapClass}>
      <h3 className="filter-title">{title}</h3>
      <div>{children}</div>
      <div className="filter__footer">
        <button
          className={`filter__button ${buttonClasses[0]}`}
          onClick={onApplyFilterHandler}
        >
          Применить
        </button>
        <button
          className={`filter__button ${buttonClasses[1]}`}
          onClick={onResetFilteHandler}
        >
          Отменить
        </button>
      </div>
    </div>
  );
};
