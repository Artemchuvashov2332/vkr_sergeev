import { FC, memo } from "react";
import { SimpleCard, Navigation, List } from "../../components";
import { ICategoryBarMobuleProps } from "./CategoryBar.types";
import "./CategoryBar.style.css";
import { Dropdown } from "../../ui";
import { IProductGroup } from "../../types";
import { useNavigate, useParams } from "react-router-dom";
import { RouterPaths } from "../../constants";
import { categoryOptions } from "../../__mocks__";

const CategoryBarProto: FC<ICategoryBarMobuleProps> = ({
  links,
  items,
  itemsType,
}) => {
  const { category } = useParams<{ category?: string }>();

  const isCategoriesList = itemsType === "category";
  const isProductTypeList = itemsType === "types" && category;

  const navigate = useNavigate();

  const onClickCardhandler = (group: IProductGroup["group"]) => {
    if (isCategoriesList) {
      navigate(
        RouterPaths.productTypeByCategory({
          category: group,
        })
      );
    }
    if (isProductTypeList && category) {
      navigate(
        RouterPaths.productByType({
          category: category,
          subtype: group,
        })
      );
    }
  };

  const onClickDrodownHandler = (group: string) => {
    navigate(
      RouterPaths.productTypeByCategory({
        category: group,
      })
    );
  };

  return (
    <div>
      <div className="main-navbar_wrapper">
        <Dropdown
          title="Каталог товаров"
          options={categoryOptions}
          modifiers="main-navbar-category-droppdown"
          memuModifiers="wide-menu"
          onItemClick={({ value }) => onClickDrodownHandler(String(value))}
        />
        <Navigation
          links={links}
          listClassName="main-navbar"
          itemClassName="main-navbar_item"
        />
      </div>
      <div>
        <List<IProductGroup>
          items={items}
          modifiers={itemsType}
          renderItem={({ imageSrc, title, group }) => (
            <SimpleCard
              imageSrc={imageSrc}
              title={title}
              onClick={() => onClickCardhandler(group)}
            />
          )}
        />
      </div>
    </div>
  );
};

export const CatalogModule = memo(CategoryBarProto);
