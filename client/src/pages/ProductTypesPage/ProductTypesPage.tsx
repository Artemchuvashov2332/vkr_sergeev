import { useMemo } from "react";
import { productTypes, products } from "../../__mocks__/mocks";
import { PageTemplate } from "../../components";
import { RouterPaths } from "../../constants";
import { CatalogModule } from "../../modules";
import { ILinkItem } from "../../types";

export const ProductTypesPage = () => {
  const links: ILinkItem[] = useMemo(
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
      <CatalogModule links={links} items={productTypes} itemsType="types" />
    </PageTemplate>
  );
};
