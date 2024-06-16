import { FC } from "react";
import { useGetPageTitleByRoute } from "../../utils";
import { Navbar, PageTemplate } from "../../components";

export const SalesPage: FC = () => {
  const title = useGetPageTitleByRoute();

  return (
    <PageTemplate title={title}>
      <Navbar />
      Скидки
    </PageTemplate>
  );
};
