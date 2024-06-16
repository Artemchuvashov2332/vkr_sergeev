import { FC } from "react";
import { Navbar, PageTemplate } from "../../components";
import { ProductListModule } from "../../modules";
import { useGetPageTitleByRoute } from "../../utils";

export const ProductListPage: FC = () => {
  const title = useGetPageTitleByRoute();

  return (
    <PageTemplate title={title}>
      <Navbar />
      <ProductListModule />
    </PageTemplate>
  );
};
