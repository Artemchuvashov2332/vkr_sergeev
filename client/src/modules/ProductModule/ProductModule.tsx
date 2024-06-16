import { FC } from "react";
import { AddBusketBlock } from "./components";
import "./ProductModule.style.css";
import { IDetailedProduct } from "../../types";
import { RatingStars } from "../../ui";

export const ProductModule: FC<{ product: IDetailedProduct }> = ({
  product,
}) => {
  const { image, characteristics, price, rating, description, amount } =
    product;
  const imageSrc = `${process.env.REACT_APP_API_URL}/${image}`;

  return (
    <div className="product-module">
      <div className="product-module__img-block">
        <a href={imageSrc} target="_black">
          <img className="product-module__img" src={imageSrc} />
        </a>
      </div>
      <div className="product-module__info-block">
        <h4>Характеристики</h4>
        <ul className="info-list">
          {characteristics.map(({ id, title, description }) => (
            <li className="info-list-item" key={id}>
              <div className="info-list-item-wrapper">
                <span className="info-list-name">{title}:</span>
                <div className="info-list-dotter"></div>
              </div>
              <div className="info-list-item-wrapper">
                <span>{description}</span>
              </div>
            </li>
          ))}
        </ul>
        <div style={{ display: "flex", gap: "10px" }}>
          <h4>Рейтинг:</h4>
          <RatingStars count={5} rating={rating} />
        </div>
        <div className="product-module__info-description">
          <h4>Описание</h4>
          <p>{description}</p>
        </div>
        <AddBusketBlock itemPrice={price} value={0} amount={amount} />
      </div>
    </div>
  );
};
