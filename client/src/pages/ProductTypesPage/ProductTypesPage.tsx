import { useMemo } from "react";
import { lumberProductTypes, productTypes } from "../../__mocks__/mocks";
import { Navbar, PageTemplate } from "../../components";
import { RouterPaths } from "../../constants";
import { TypeShopModule } from "../../modules";
import { ILinkItem } from "../../types";
import { useParams } from "react-router-dom";
import { usePageTitle } from "../../utils";

const tabs: ILinkItem[] = [
  {
    text: "Распродажа",
    refTo: RouterPaths.SALES,
  },
  {
    text: "Новинки",
    refTo: RouterPaths.NEW_ITEMS,
  },
  {
    text: "Оплата",
    refTo: RouterPaths.PAYMENT,
  },
  {
    text: "Доставка",
    refTo: RouterPaths.DELIVERY,
  },
  {
    text: "Контакты",
    refTo: RouterPaths.ABOUT,
  },
];

export const ProductTypesPage = () => {
  return (
    <PageTemplate>
      <Navbar tabs={tabs} />
      <TypeShopModule items={lumberProductTypes} />
    </PageTemplate>
  );
};
