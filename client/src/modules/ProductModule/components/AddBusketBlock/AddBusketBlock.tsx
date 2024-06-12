import { FC, useState } from "react";
import { CounterClicker } from "../../../../components";
import { Button, Icon } from "../../../../ui";
import "./AddBusketBlock.style.css";
import { AddBusketBlockProps } from "./AddBusketBlock.types";
import { getClass } from "../../../../utils";

export const AddBusketBlock: FC<AddBusketBlockProps> = ({
  value,
  isInStock,
}) => {
  const [busketCount, setBusketCount] = useState(value);
  const [addToBusketCount, setAddToBusketCount] = useState(1);

  return (
    <div className="add-block-wrapper">
      <CounterClicker
        initialValue={1}
        min={1}
        max={100}
        onChange={setAddToBusketCount}
      />
      <Button
        onClick={() => setBusketCount(addToBusketCount)}
        disabled={!isInStock}
      >
        В корзину
      </Button>
      <span>Корзина: {busketCount}</span>
      <div
        className={getClass("add-block__in-stock", isInStock ? "green" : "red")}
      >
        <Icon
          name={isInStock ? "good_check" : "cancel"}
          height={15}
          width={15}
        />
        <span>{isInStock ? "Есть в наличии" : "Нет в наличии"}</span>
      </div>
    </div>
  );
};
