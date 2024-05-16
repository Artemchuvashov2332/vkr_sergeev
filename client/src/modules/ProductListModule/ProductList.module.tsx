import { FC } from "react";
import { Filter, List, PropductCard, Sorting } from "../../components";
import { useNavigate } from "react-router-dom";
import { RouterPaths } from "../../constants";
import { getFiltredProduct, useAppSelector } from "../../store";
import "./ProductList.style.css";

export const ProductListModule: FC = () => {
  const navigate = useNavigate();
  const products = useAppSelector(getFiltredProduct)

  const onClickCardhandler = (id: number) => {
    navigate(RouterPaths.productItem({ id }));
  };

  return (
    <div className="product-module">
      <div className="w20">
        <Filter />
      </div>
      <div className="w80 pl20">
        <Sorting />
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
