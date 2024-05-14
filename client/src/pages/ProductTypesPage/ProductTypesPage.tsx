import { useMemo } from "react";
import { productTypes } from "../../__mocks__/mocks";
import { Navbar, PageTemplate } from "../../components";
import { RouterPaths } from "../../constants";
import { TypeShopModule } from "../../modules";
import { ILinkItem } from "../../types";

export const ProductTypesPage = () => {
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
      <h1>Строительные материалы</h1>
      <Navbar tabs={tabs} />
      <TypeShopModule items={productTypes} />
    </PageTemplate>
  );
};
