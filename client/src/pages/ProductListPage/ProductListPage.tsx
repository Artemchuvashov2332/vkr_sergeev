import { useMemo } from "react";
import { Navbar, PageTemplate } from "../../components";
import { RouterPaths } from "../../constants";
import { ProductListModule, TypeShopModule } from "../../modules";
import { ILinkItem } from "../../types";
import { finishingMaterials } from "../../__mocks__";

export const ProductListPage = () => {
  const tabs: ILinkItem[] = useMemo(
    () => [
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
    ],
    [RouterPaths]
  );

  return (
    <PageTemplate>
      <Navbar tabs={tabs} />
      <ProductListModule />
    </PageTemplate>
  );
};
