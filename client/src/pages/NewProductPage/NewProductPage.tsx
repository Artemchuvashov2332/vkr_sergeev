import { PageTemplate } from "../../components";
import { useGetPageTitleByRoute } from "../../utils";

export const NewProductPage = () => {
  const title = useGetPageTitleByRoute();

  return <PageTemplate title={title}>Новое</PageTemplate>;
};
