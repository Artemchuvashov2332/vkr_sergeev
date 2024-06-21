import { FC, useEffect } from "react";
import { List, Loader, PropductCard, Sorting } from "../../components";
import { useNavigate, useParams } from "react-router-dom";
import { RouterPaths } from "../../constants";
import {
  fetchAllCategoriesThunk,
  fetchProductsThunk,
  fetchTypesThunk,
  getCategories,
  getFiltredProduct,
  getSortedItems,
  useAppDispatch,
  useAppSelector,
} from "../../store";
import "./ProductList.style.css";
import { ProductFilter } from "./components";
import { useSearch } from "../../utils";

export const ProductListModule: FC = () => {
  const { category: categoryCode, type: typeCode } = useParams<{
    category: string;
    type: string;
  }>();
  const { items: categories } = useAppSelector(getCategories);
  const types = useAppSelector((state) => state.types.items);
  const dispatch = useAppDispatch();

  const [parsedSearchParams] = useSearch<{ value: string }>();
  const navigate = useNavigate();

  const products = useAppSelector((state) => {
    const filtredProducts = getFiltredProduct(state);
    return getSortedItems({
      state,
      items: [...filtredProducts],
      key: "products",
    });
  });

  useEffect(() => {
    if (!categories.length) {
      dispatch(fetchAllCategoriesThunk());
    }
  }, [categories]);

  useEffect(() => {
    const categoryId = categories.find(
      (category) => category.code === categoryCode
    )?.id;

    if (!categoryId) return;

    dispatch(fetchTypesThunk({ categoryId }));
  }, [categories, categoryCode]);

  useEffect(() => {
    let fetchParams = {};

    if (parsedSearchParams.value) {
      fetchParams = {
        search: parsedSearchParams.value,
      };
    } else if (types?.length) {
      fetchParams = {
        typeId: types.find(({ code }) => code === typeCode)?.id,
      };
    }

    dispatch(fetchProductsThunk(fetchParams));
  }, [types, typeCode, parsedSearchParams.value]);

  const onClickCardhandler = (id: number) => {
    navigate(RouterPaths.productItem({ id }));
  };

  return (
    <div className="product-list-module">
      <div className="w20">
        <ProductFilter />
      </div>
      <div className="w80 pl20">
        <Sorting sortKey="products" />
        <List
          items={products}
          modifiers="product"
          renderItem={(product) => (
            <PropductCard
              product={product}
              onClick={() => onClickCardhandler(product.id)}
            />
          )}
        />
      </div>
    </div>
  );
};
