import { FC } from "react";
import { IProductCardProps } from "./ProductPropst.types";
import "./ProductCard.style.css";

export const PropductCard: FC<IProductCardProps> = ({ product, onClick }) => {
  const { name, image, rating, price, summaryDescription } = product;

  return (
    <div className="product-card" onClick={onClick}>
      <div className="product-image_wrapper">
        <img
          src={`${process.env.REACT_APP_API_URL}/${image}`}
          alt={name}
          className="product-image"
        />
      </div>
      <h2 className="product-title">{name}</h2>
      <p className="product-description">{summaryDescription}</p>
      <div className="product-info">
        <span className="product-rating">Rating: {rating}</span>
        <span className="product-price">{price} руб.</span>
      </div>
    </div>
  );
};
