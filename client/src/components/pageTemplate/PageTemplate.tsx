import { FC, PropsWithChildren } from "react";
import { AppContainer, Footer, Header, IHeaderLink } from "..";
import "./PageTemplate.style.css";

export const PageTemplate: FC<PropsWithChildren> = ({ children }) => {
  const navLinksHeader: IHeaderLink[] = [
    {
      text: "О нас",
    },
    {
      text: "Строительные материалы",
    },
    {
      text: "Контакты",
    },
  ];

  const navLinksFooter: IHeaderLink[] = [
    {
      text: "О нас",
    },
    {
      text: "Строительные и отделочные материалы",
    },
    {
      text: "Доставка Стройматериалов",
    },
    {
      text: "Оплата стройматериалов",
    },
    {
      text: "Скидки на стройматериалы",
    },
    {
      text: "Производители",
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
