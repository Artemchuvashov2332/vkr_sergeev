import { FC, useEffect } from "react";
import { List, PropductCard, Sorting } from "../../components";
import { useNavigate, useParams } from "react-router-dom";
import { RouterPaths } from "../../constants";
import {
  fakeFetchProducts,
  getFiltredProduct,
  getSortedItems,
  useAppDispatch,
  useAppSelector,
} from "../../store";
import "./ProductList.style.css";
import { ProductFilter } from "./components";

export const ProductListModule: FC = () => {
  const { type } = useParams<{ category: string; type: string }>();
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
    dispatch(fakeFetchProducts());
  }, []);

  const onClickCardhandler = (id: number) => {
    navigate(RouterPaths.productItem({ id }));
  };

  return (
    <div className="product-module">
      <div className="w20">
        <ProductFilter />
      </div>
      <div className="w80 pl20">
        <Sorting sortKey="products" />
        <List
          items={type === "led" ? products : []}
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
