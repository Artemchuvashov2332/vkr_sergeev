import { FC } from "react";
import { Filter, List, PropductCard, Sorting } from "../../components";
import { IProduct } from "../../types";
import { useNavigate } from "react-router-dom";
import { RouterPaths } from "../../constants";
import "./ProductList.style.css";

export const ProductListModule: FC<{ items: IProduct[] }> = ({ items }) => {
  const navigate = useNavigate();

  const onClickCardhandler = (id: number) => {
    navigate(RouterPaths.productItem({ id }));
  };

  return (
    <div className="product-module">
      <div className="w20">
        <Filter />
      </div>
      <div className="w80">
        <Sorting />
        <List
          items={items}
          modifiers="category"
          renderItem={(item) => (
            <PropductCard
              product={item}
              onClick={() => onClickCardhandler(item.id)}
            />
          )}
        />
      </div>
    </div>
  );
};
