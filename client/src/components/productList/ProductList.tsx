import { FC } from "react";
import { Card } from "..";
import { IProductListProps } from "./ProductList.types";
import "./ProductList.style.css";

export const ProductList: FC<IProductListProps> = ({ products }) => {
  return (
    <div className="product-list">
      {products.map((product, index) => (
        <Card key={index} {...product} />
      ))}
    </div>
  );
};
