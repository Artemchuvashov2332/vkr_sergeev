import { PageTemplate } from "../../components";
import { useGetPageTitleByRoute } from "../../utils";

export const DeliveryPage = () => {
  const title = useGetPageTitleByRoute();

  return <PageTemplate title={title}>Доставока</PageTemplate>;
};
