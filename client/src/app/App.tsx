import { FC } from "react";
import { Header, IHeaderLink, PageWrapper } from "../components";
import "./App.css";

export const App: FC = () => {
  const navLinks: IHeaderLink[] = [
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

  return (
    <div className="App">
      <PageWrapper>
        <Header navLinks={navLinks} />
        <p>hui</p>
      </PageWrapper>
    </div>
  );
};
