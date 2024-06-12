import { PageTemplate } from "../../components";
import { useGetPageTitleByRoute } from "../../utils";

export const PaymentPage = () => {
  const title = useGetPageTitleByRoute();

  return <PageTemplate title={title}>Оплата</PageTemplate>;
};
