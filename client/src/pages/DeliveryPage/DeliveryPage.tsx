import { FC } from "react";
import { Navbar, PageTemplate } from "../../components";
import { useGetPageTitleByRoute } from "../../utils";

export const DeliveryPage: FC = () => {
  const title = useGetPageTitleByRoute();

  return (
    <PageTemplate title={title}>
      <Navbar />
      Доставка
    </PageTemplate>
  );
};
