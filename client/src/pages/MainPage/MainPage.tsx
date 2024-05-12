import { products } from "../../__mocks__/mocks";
import { PageTemplate } from "../../components";
import { ProductList } from "../../components/productList/ProductList";

export const MainPage = () => {
  return (
    <PageTemplate>
      <h1>Главная хуйня</h1>
      <ProductList products={products} />
    </PageTemplate>
  );
};
