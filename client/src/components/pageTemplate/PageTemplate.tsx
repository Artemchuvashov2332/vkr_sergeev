import {
  FC,
  PropsWithChildren,
  useState,
  ChangeEvent,
  KeyboardEvent,
} from "react";
import { Footer, Header } from "../../components";
import "./PageTemplate.style.css";
import { AppContainer } from "../../ui";
import { RouterPaths } from "../../constants";
import { ILinkItem } from "../../types";
import { useNavigate } from "react-router-dom";
import { usePageTitle } from "../../utils";

const navLinksHeader: ILinkItem[] = [
  {
    text: "О нас",
    refTo: RouterPaths.ABOUT,
  },
  {
    text: "Каталог товаров",
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

export const PageTemplate: FC<PropsWithChildren> = ({ children }) => {
  const title = usePageTitle();

  const [searchValue, setSearchValue] = useState("");
  const navigate = useNavigate();

  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) =>
    setSearchValue(event.target.value);

  const onSearchHandler = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.code === "Enter") {
      navigate(RouterPaths.searchBy({ value: searchValue || "all" }));
    }
  };

  return (
    <div className="page">
      <Header navLinks={navLinksHeader} />
      <main className="page-main">
        <AppContainer>
          <div>
            <div className="search-input_wrapper">
              <input
                className="search-input"
                type="text"
                placeholder="Поиск"
                value={searchValue}
                onChange={onChangeHandler}
                onKeyDown={onSearchHandler}
              />
              <img
                className="search-input_icon"
                src="../../assets/search_icon.svg"
                alt="поиск"
              />
            </div>
            <h1>{title}</h1>
            {children}
          </div>
        </AppContainer>
      </main>
      <Footer
        navLinks={navLinksFooter}
        address="ул. Кузбасская, 123, г. Нижний Новгород"
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
            value: "https://web.whatsapp",
          },
          {
            text: "Телеграм",
            icon: "telegram",
            value: "https://t.me/telegram",
          },
        ]}
        // additionalInfo="Я пидр"
      />
    </div>
  );
};
