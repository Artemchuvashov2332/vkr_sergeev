import qs from "qs";

const productTypeByCategory = ({ category }: { category: string }) =>
  `/catalog/${category}`;

const productByType = ({
  category,
  subtype,
}: {
  category: string;
  subtype: string;
}) => `/catalog/${category}/${subtype}`;

const productItem = ({ id }: { id: number }) => `/product/${id}`;

const searchBy = ({ value }: { value: string }) =>
  `/search${qs.stringify({ value }, { addQueryPrefix: true })}`;

export const RouterPaths = {
  MAIN: "/",
  SALES: "/sales",
  NEW_ITEMS: "/new_items",
  PAYMENT: "/payment",
  DELIVERY: "/delivery",
  LIFTING_SERVICES: "/lifting_services",
  ABOUT: "/about",
  MANUFACTURERS: "/manufacturers",
  SEARCH: "/search",
  CATERORY: "/catalog/:category",
  TYPE: "/catalog/:category/:type",
  PRODUCT: "/product/:id",
  searchBy,
  productTypeByCategory,
  productByType,
  productItem,
};

export const COMMON_PAGE_TITLE = {
  [RouterPaths.MAIN]: "Каталог товаров",
  [RouterPaths.ABOUT]: "Контакты",
  [RouterPaths.SALES]: "Распродажа",
  [RouterPaths.NEW_ITEMS]: "Новинки",
  [RouterPaths.PAYMENT]: "Оплата",
  [RouterPaths.DELIVERY]: "Доставка",
  [RouterPaths.LIFTING_SERVICES]: "Услуги подъёма на этаж",
  [RouterPaths.MANUFACTURERS]: "Производство",
};
