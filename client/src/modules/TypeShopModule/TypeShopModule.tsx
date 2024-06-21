import { FC } from "react";
import { IProductGroup } from "../../types";
import { List, Loader, SimpleCard } from "../../components";
import { useNavigate, useParams } from "react-router-dom";
import { RouterPaths } from "../../constants";
import { useAppSelector } from "../../store";
import { isLoading } from "../../utils";
import "./TypeShopModule.style.css";

export const TypeShopModule: FC<{ items: IProductGroup[] }> = ({ items }) => {
  const { category } = useParams<{ category: string }>();
  const navigate = useNavigate();

  const loaders = useAppSelector((state) => state.loaders);
  const isLoadingData = isLoading(loaders, ["fetchCategories", "fetchTypes"]);

  const onClickCardhandler = (code: string) => {
    if (!category) return;

    navigate(
      RouterPaths.productByType({
        category,
        subtype: code,
      })
    );
  };

  if (isLoadingData) {
    return (
      <div className="typeshop-module-wrapper">
        <Loader />
      </div>
    );
  }

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
