import { PageTemplate } from "../../components";
import { useGetPageTitleByRoute } from "../../utils";

export const NotFoundPage = () => {
  const title = useGetPageTitleByRoute();

  return <PageTemplate title={title}>Страница не найдена</PageTemplate>;
};
