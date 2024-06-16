import { FC, useState } from "react";
import { CounterClicker } from "../../../../components";
import { Button, Icon } from "../../../../ui";
import "./AddBusketBlock.style.css";
import { AddBusketBlockProps } from "./AddBusketBlock.types";
import { getClass } from "../../../../utils";

export const AddBusketBlock: FC<AddBusketBlockProps> = ({
  itemPrice,
  value,
  amount,
}) => {
  const [state, setState] = useState({
    totalCost: itemPrice,
    busketCount: value,
  });
  const [addToBusketCount, setAddToBusketCount] = useState(1);
  const isInStock = amount > 0;

  const onCountClickHandler = (count: number) => {
    const newCost = count * itemPrice;
    setState((state) => ({
      ...state,
      totalCost: newCost,
    }));
    setAddToBusketCount(count);
  };

  return (
    <div className="add-block-wrapper">
      <div className="add-block-section">
        <span>Корзина: {state.busketCount}</span>
        <CounterClicker
          initialValue={1}
          min={1}
          max={amount}
          onChange={onCountClickHandler}
        />
        <Button
          onClick={() =>
            setState((state) => ({
              ...state,
              busketCount: addToBusketCount,
            }))
          }
          disabled={addToBusketCount > amount}
        >
          В корзину
        </Button>
      </div>
      <div className="add-block-section">
        <p>Цена: {state.totalCost}₽</p>
        <div
          className={getClass(
            "add-block__in-stock",
            isInStock ? "green" : "red"
          )}
        >
          <Icon
            name={isInStock ? "good_check" : "cancel"}
            height={15}
            width={15}
          />
          <span>{isInStock ? `В наличии ${amount} шт.` : "Нет в наличии"}</span>
        </div>
      </div>
    </div>
  );
};
