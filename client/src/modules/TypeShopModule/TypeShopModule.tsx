import { FC } from "react";
import { IProductGroup } from "../../types";
import { List, SimpleCard } from "../../components";
import { useNavigate, useParams } from "react-router-dom";
import { RouterPaths } from "../../constants";

export const TypeShopModule: FC<{ items: IProductGroup[] }> = ({ items }) => {
  const { category } = useParams<{ category: string }>();
  const navigate = useNavigate();

  const onClickCardhandler = (code: string) => {
    if (!category) return;

    navigate(
      RouterPaths.productByType({
        category,
        subtype: code,
      })
    );
  };

  return (
    <List
      items={items}
      modifiers="types"
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
