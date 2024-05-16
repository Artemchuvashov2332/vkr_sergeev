import { useMemo, useState } from "react";
import { clearFilter, getProducts, setFilter, useAppDispatch, useAppSelector } from "../../store";
import { DoubleThumblerSlider, Rating } from "../../ui";
import "./Filter.style.css";

const RATINGS_MARKS = [5, 4, 3, 2, 1];

// TODO сделать компонент кнопки, переписать фильтр, чтобы он был обёрткой над любой формой
export const Filter = () => {
  const products = useAppSelector(getProducts);
  const dispatch = useAppDispatch();

  const allProductsPrices = products.map(({ price }) => price);
  const priceRange = useMemo(
    () => ({
      min: Math.min(...allProductsPrices) || 0,
      max: Math.max(...allProductsPrices) || 0,
    }),
    [products]
  );

  const initialState = {
    price: {
      min: priceRange.min,
      max: priceRange.max
    },
    raiting: null,
  }

  const [selectedValues, setSelectedValues] = useState<{
    price: {
      min: number,
      max: number
    }
    raiting: number | null;
  }>(initialState);

  const onChangeField = (field: "price" | "raiting", newValue: {
    min: number,
    max: number
  } | number) => {
    setSelectedValues((state) => ({...state, [field]: newValue}))
  }

  const onConfirmFilter = () => {
    dispatch(setFilter({
      fields: selectedValues,
      path: 'products',
      key: 'products'
    }))
  }

  const onClearFilter = () => {
    setSelectedValues(initialState)
    dispatch(clearFilter({
      key: 'products'
    }))
  }


  return (
    <form className="form-filter">
      <h3 className="filter-title">Фильтр</h3>
      <section className="form-filter__section">
        <h5 className="form-filter__section-title">Цена</h5>
        <div className="form-filter__section-content">
          {/* TODO должен быть контролируемым */}
          <DoubleThumblerSlider limits={priceRange} units="руб." onChange={(newRange) => onChangeField("price", newRange)}/>
        </div>
      </section>
      <section className="form-filter__section">
        <h5 className="form-filter__section-title">Рейтинг</h5>
        <div className="form-filter__section-content">
          <Rating marks={RATINGS_MARKS} onChange={(newMark) => onChangeField("raiting", newMark)}/>
        </div>
      </section>
      <div className="form-filter__footer">
        <button
          className="form-filter__button button-green"
          onClick={(event) => {
            event.preventDefault();
            onConfirmFilter()
          }}
        >
          Применить
        </button>
        <button
          className="form-filter__button button-border"
          onClick={(event) => {
            event.preventDefault();
            onClearFilter()
          }}
        >
          Отменить
        </button>
      </div>
    </form>
  );
};
