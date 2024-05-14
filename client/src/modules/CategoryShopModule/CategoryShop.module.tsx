import { FC } from "react";
import { IProductGroup } from "../../types";
import { List, SimpleCard } from "../../components";
import { useNavigate } from "react-router-dom";
import { RouterPaths } from "../../constants";

export const CategoryShopModule: FC<{ items: IProductGroup[] }> = ({
  items,
}) => {
  const navigate = useNavigate();

  const onClickCardhandler = (group: IProductGroup["group"]) => {
    navigate(
      RouterPaths.productTypeByCategory({
        category: group,
      })
    );
  };

  return (
    <List<IProductGroup>
      items={items}
      modifiers="category"
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
