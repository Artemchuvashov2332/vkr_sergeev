import { useMemo, useState } from "react";
import { getProducts, useAppSelector } from "../../../../store";
import { DoubleThumblerSlider, Rating } from "../../../../ui";
import { FilterField, FilterWrapper } from "../../../../components";

const RATINGS_MARKS = [5, 4, 3, 2, 1];

export const ProductFilter = () => {
  const products = useAppSelector(getProducts);

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
      max: priceRange.max,
    },
    raiting: null,
  };

  const [selectedValues, setSelectedValues] = useState<{
    price: {
      min: number;
      max: number;
    };
    raiting: number | null;
  }>(initialState);

  const onChangeField = (
    field: "price" | "raiting",
    newValue:
      | {
          min: number;
          max: number;
        }
      | number
  ) => {
    setSelectedValues((state) => ({ ...state, [field]: newValue }));
  };

  return (
    <FilterWrapper
      title="Фильтр"
      filterName="products"
      selectedValues={selectedValues}
      onResetFilter={() => setSelectedValues(initialState)}
    >
      <FilterField title="Цена">
        <DoubleThumblerSlider
          values={[selectedValues.price.min, selectedValues.price.max]}
          limits={priceRange}
          units="руб."
          onChange={(newRange) => onChangeField("price", newRange)}
        />
      </FilterField>
      <FilterField title="Рейтинг">
        <Rating
          value={selectedValues.raiting}
          marks={RATINGS_MARKS}
          onChange={(newMark) => onChangeField("raiting", newMark)}
        />
      </FilterField>
    </FilterWrapper>
  );
};
