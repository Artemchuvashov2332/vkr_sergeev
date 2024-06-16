import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { IProductGroup } from "../../types";
import { List, SimpleCard } from "../../components";
import { RouterPaths } from "../../constants";

export const CategoryShopModule: FC<{ items: IProductGroup[] }> = ({
  items,
}) => {
  const navigate = useNavigate();

  const onClickCardhandler = (code: string) => {
    navigate(
      RouterPaths.productTypeByCategory({
        category: code,
      })
    );
  };

  return (
    <List
      items={items}
      modifiers="category"
      renderItem={({ image, title, code }) => (
        <SimpleCard
          imageSrc={`${process.env.REACT_APP_API_URL}/${image}`}
          title={title}
          onClick={() => onClickCardhandler(code)}
        />
      )}
    />
  );
};
