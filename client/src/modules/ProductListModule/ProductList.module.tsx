import { FC } from "react";
import { List, PropductCard } from "../../components";
import { IProduct } from "../../types";
import { useNavigate } from "react-router-dom";
import { RouterPaths } from "../../constants";

export const ProductListModule: FC<{ items: IProduct[] }> = ({ items }) => {
  const navigate = useNavigate();

  const onClickCardhandler = (id: number) => {
    navigate(RouterPaths.productItem({ id }));
  };

  return (
    <div>
      Фильтр Сортировка
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
  );
};
