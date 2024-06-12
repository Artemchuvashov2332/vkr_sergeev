import { FC } from "react";
import "./ProductModule.style.css";
import { CounterClicker } from "../../components";
import { AddBusketBlock } from "./components";

export const ProductModule: FC<{ product: Record<string, any> }> = ({
  product,
}) => {
  return (
    <div className="product-module">
      <div className="product-module__img-block">
        <a
          href={product.imageUrl?.full || product.imageUrl.preview}
          target="_black"
        >
          <img className="product-module__img" src={product.imageUrl.preview} />
        </a>
      </div>
      <div className="product-module__info-block">
        <ul className="info-list">
          {product.characteristics.map(({ id, name, value }) => (
            <li className="info-list-item" key={id}>
              <div className="info-list-item-wrapper">
                <span className="info-list-name">{name}:</span>
                <div className="info-list-dotter"></div>
              </div>
              <div className="info-list-item-wrapper">
                <span>{value}</span>
              </div>
            </li>
          ))}
        </ul>
        <div className="product-module__info-description">
          <span>Описание</span>
          <p>{product.description}</p>
        </div>
        <AddBusketBlock value={0} isInStock={true} />
      </div>
    </div>
  );
};
