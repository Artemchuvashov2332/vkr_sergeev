import { FC, useEffect } from "react";
import { List, Loader, PropductCard, Sorting } from "../../components";
import { useNavigate, useParams } from "react-router-dom";
import { RouterPaths } from "../../constants";
import {
  fetchProductsThunk,
  getFiltredProduct,
  getSortedItems,
  useAppDispatch,
  useAppSelector,
} from "../../store";
import "./ProductList.style.css";
import { ProductFilter } from "./components";
import { useSearch } from "../../utils";

export const ProductListModule: FC = () => {
  const { type } = useParams<{ category: string; type: string }>();
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
  const dispatch = useAppDispatch();

  useEffect(() => {
    const fetchParams = parsedSearchParams.value
      ? {
          search: parsedSearchParams.value,
        }
      : {
          type,
        };
    dispatch(fetchProductsThunk(fetchParams));
  }, [type, parsedSearchParams.value]);

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
