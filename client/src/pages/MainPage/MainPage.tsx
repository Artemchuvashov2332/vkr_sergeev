import { useMemo } from "react";
import { categories } from "../../__mocks__/mocks";
import { Navbar, PageTemplate } from "../../components";
import { RouterPaths } from "../../constants";
import { CategoryShopModule } from "../../modules";
import { ILinkItem } from "../../types";
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

export const MainPage = () => {
  return (
    <PageTemplate>
      <Navbar tabs={tabs} />
      <CategoryShopModule items={categories} />
    </PageTemplate>
  );
};
