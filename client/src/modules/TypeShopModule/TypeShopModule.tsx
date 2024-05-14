import { FC } from "react";
import { IProductGroup } from "../../types";
import { List, SimpleCard } from "../../components";
import { useNavigate, useParams } from "react-router-dom";
import { RouterPaths } from "../../constants";

export const TypeShopModule: FC<{ items: IProductGroup[] }> = ({ items }) => {
  const { category } = useParams<{ category: string }>();
  const navigate = useNavigate();

  const onClickCardhandler = (group: IProductGroup["group"]) => {
    if (!category) return;

    navigate(
      RouterPaths.productByType({
        category,
        subtype: group,
      })
    );
  };

  return (
    <List<IProductGroup>
      items={items}
      modifiers="types"
      renderItem={({ imageSrc, title, group }) => (
        <SimpleCard
          imageSrc={imageSrc}
          title={title}
          onClick={() => onClickCardhandler(group)}
        />
      )}
    />
  );
};
