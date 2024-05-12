import { FC } from "react";
import { IProduct } from "../../types";
import "./Card.style.css";

export const Card: FC<IProduct> = ({
  imageSrc,
  title,
  description,
  rating,
  price,
}) => {
  return (
    <div className="product-card">
      <div className="product-image_wrapper">
        <img src={imageSrc} alt={title} className="product-image" />
      </div>
      <h2 className="product-title">{title}</h2>
      <p className="product-description">{description}</p>
      <div className="product-info">
        <span className="product-rating">Rating: {rating}</span>
        <span className="product-price">{price} руб.</span>
      </div>
    </div>
  );
};
