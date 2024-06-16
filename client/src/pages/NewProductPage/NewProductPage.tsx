import { FC } from "react";
import { Navbar, PageTemplate } from "../../components";
import { useGetPageTitleByRoute } from "../../utils";

export const NewProductPage: FC = () => {
  const title = useGetPageTitleByRoute();

  return (
    <PageTemplate title={title}>
      <Navbar />
      Новое
    </PageTemplate>
  );
};
