import { FC } from "react";
import { ISimpleCardProps } from "./SimpleCard.types";
import "./SimpleCard.style.css";

export const SimpleCard: FC<ISimpleCardProps> = ({
  onClick,
  imageSrc,
  title,
}) => {
  return (
    <div className="category-card" onClick={onClick}>
      <div className="category-image_wrapper">
        <img src={imageSrc} alt={title} className="category-image" />
      </div>
      <h2 className="category-title">{title}</h2>
    </div>
  );
};
