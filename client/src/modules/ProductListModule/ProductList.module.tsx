import { FC } from "react";
import { List, PropductCard, Sorting } from "../../components";
import { useNavigate, useParams } from "react-router-dom";
import { RouterPaths } from "../../constants";
import { getFiltredProduct, useAppSelector } from "../../store";
import "./ProductList.style.css";
import { ProductFilter } from "./components";

export const ProductListModule: FC = () => {
  const { type } = useParams<{ category: string; type: string }>();
  const navigate = useNavigate();
  const products = useAppSelector(getFiltredProduct);

  const onClickCardhandler = (id: number) => {
    navigate(RouterPaths.productItem({ id }));
  };

  return (
    <div className="product-module">
      <div className="w20">
        <ProductFilter />
      </div>
      <div className="w80 pl20">
        <Sorting />
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
