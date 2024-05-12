import { FC, PropsWithChildren } from "react";
import { Footer, Header } from "../../components";
import "./PageTemplate.style.css";
import { AppContainer } from "../../ui";
import { RouterPaths } from "../../constants";
import { ILinkItem } from "../../types";

export const PageTemplate: FC<PropsWithChildren> = ({ children }) => {
  const navLinksHeader: ILinkItem[] = [
    {
      text: "О нас",
      refTo: RouterPaths.ABOUT,
    },
    {
      text: "Строительные материалы",
      refTo: RouterPaths.MAIN,
    },
    {
      text: "Новинки",
      refTo: RouterPaths.NEW_ITEMS,
    },
  ];

  const navLinksFooter: ILinkItem[] = [
    {
      text: "О нас",
      refTo: RouterPaths.ABOUT,
    },
    {
      text: "Строительные и отделочные материалы",
      refTo: RouterPaths.MAIN,
    },
    {
      text: "Доставка Стройматериалов",
      refTo: RouterPaths.DELIVERY,
    },
    {
      text: "Оплата стройматериалов",
      refTo: RouterPaths.PAYMENT,
    },
    {
      text: "Скидки на стройматериалы",
      refTo: RouterPaths.SALES,
    },
    {
      text: "Производители",
      refTo: RouterPaths.MANUFACTURERS,
    },
  ];

  return (
    <div className="page">
      <Header navLinks={navLinksHeader} />
      <main className="page-main">
        <AppContainer>{children}</AppContainer>
      </main>
      <Footer
        navLinks={navLinksFooter}
        address="Улица Пушкина, дом Колотушкина 4"
        contacts={[
          {
            type: "phone",
            value: "+7-(999)-999-99-99",
          },
          {
            type: "email",
            value: "gvemon@mail.ru",
          },
        ]}
        socialLinks={[
          {
            text: "Whatsapp",
            icon: "whatsapp",
            value: "https://www.youtube.com/",
          },
          {
            text: "Телеграм",
            icon: "telegram",
            value: "https://t.me/Chuvash_Artem",
          },
        ]}
        additionalInfo="Я пидр"
      />
    </div>
  );
};
