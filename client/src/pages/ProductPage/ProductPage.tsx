import { Navbar, PageTemplate } from "../../components";
import { RouterPaths } from "../../constants";
import { ProductModule } from "../../modules";
import { ILinkItem } from "../../types";

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

const fakeData = {
  title: "Дверь белая",
  characteristics: [
    {
      id: 1,
      name: "Рейтинг",
      value: "4.2",
    },
    {
      id: 2,
      name: "Биба",
      value: "Залупная биба",
    },
    {
      id: 3,
      name: "Боба",
      value: "Абоба биба бобо",
    },
    {
      id: 4,
      name: "Тест",
      value: "Тест Тест Тест Тест",
    },
  ],
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique accusamus, assumenda error beatae minima, perspiciatis consequatur eius cumque quidem amet dolorem. Ratione, repellendus quibusdam! Dolor aspernatur minus asperiores debitis neque.",
  imageUrl: {
    preview:
      "https://нн-строй.рф/image/cache/data/dveri/dveri-mezhkomnatnye-dvernoe-polotno-olovi-2m-beloe-gostl-400x400.jpg",
    full: "https://нн-строй.рф/image/cache/data/dveri/dveri-mezhkomnatnye-dvernoe-polotno-olovi-2m-beloe-gostl-800x800.jpg",
  },
};

export const ProductPage = () => {
  return (
    <PageTemplate title={fakeData.title}>
      <Navbar tabs={tabs} />
      <ProductModule product={fakeData} />
    </PageTemplate>
  );
};
