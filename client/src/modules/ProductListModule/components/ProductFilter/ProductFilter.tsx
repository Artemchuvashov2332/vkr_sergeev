import { memo, useEffect, useMemo, useState } from "react";
import { getProducts, useAppSelector } from "../../../../store";
import { DoubleThumblerSlider, Rating } from "../../../../ui";
import { FilterField, FilterWrapper } from "../../../../components";
import { useSearch } from "../../../../utils";

const RATINGS_MARKS = [5, 4, 3, 2, 1];

interface StateParams {
  price: {
    min: number;
    max: number;
  };
  rating: number | null;
}

interface SearchParamsFilter {
  price?: {
    min?: string;
    max?: string;
  };
  rating?: string;
}

const ProductFilterComponent = () => {
  const [parsedSearchParams] = useSearch<SearchParamsFilter>();
  const products = useAppSelector(getProducts);

  const initialState = {
    price: {
      min: 0,
      max: 0,
    },
    rating: null,
  };

  const [selectedValues, setSelectedValues] =
    useState<StateParams>(initialState);

  const priceRange = useMemo(() => {
    const allProductsPrices = products.map(({ price }) => price);
    const hasPrices = allProductsPrices.length;

    return {
      min: hasPrices ? Math.min(...allProductsPrices) : 0,
      max: hasPrices ? Math.max(...allProductsPrices) : 0,
    };
  }, [products.length]);

  useEffect(() => {
    setSelectedValues((state) => {
      const params = {
        price: {
          min: Number(parsedSearchParams?.price?.min) || priceRange.min,
          max: Number(parsedSearchParams?.price?.max) || priceRange.max,
        },
        rating: Number(parsedSearchParams?.rating) || state?.rating,
      };

      return params;
    });
  }, [
    priceRange,
    parsedSearchParams?.price?.min,
    parsedSearchParams?.price?.max,
    parsedSearchParams?.rating,
  ]);

  const onReset = () => {
    setSelectedValues({
      price: {
        min: priceRange.min,
        max: priceRange.max,
      },
      rating: null,
    });
  };

  const onChangeField = (
    field: "price" | "rating",
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
      // @ts-expect-error
      selectedValues={selectedValues}
      onResetFilter={onReset}
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
          value={selectedValues.rating}
          marks={RATINGS_MARKS}
          onChange={(newMark) => onChangeField("rating", newMark)}
        />
      </FilterField>
    </FilterWrapper>
  );
};

export const ProductFilter = memo(ProductFilterComponent);
