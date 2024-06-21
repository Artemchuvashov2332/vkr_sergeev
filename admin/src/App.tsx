import { Admin, Resource } from "react-admin";
import { dataProvider } from "./dataProvider";
import { authProvider } from "./authProvider";
import {
  CategoryCreate,
  CategoryEdit,
  CategoryList,
  TypeEdit,
  TypeList,
} from "./components";
import { Route } from "react-router-dom";
import { TypeCategory } from "./components/Type/TypeDetails";
import { TypeCreate } from "./components/Type/TypeCreate";
import { ProductList } from "./components/Product/ProductList";
import { ProductEdit } from "./components/Product/ProductEdit";
import { ProductTypes } from "./components/Product/ProductDetails";
import { ProductCreate } from "./components/Product/ProductCreate";

console.debug(dataProvider);

export const App = () => (
  <Admin dataProvider={dataProvider} authProvider={authProvider}>
    <Resource
      name="category"
      options={{ label: "Категории товаров" }}
      list={CategoryList}
      edit={CategoryEdit}
      create={CategoryCreate}
    />
    <Resource
      name="type"
      options={{ label: "Типы товаров" }}
      list={TypeList}
      edit={TypeEdit}
      create={TypeCreate}
    >
      <Route path=":id/categories" element={<TypeCategory />} />
    </Resource>
    <Resource
      name="product"
      options={{ label: "Товары" }}
      list={ProductList}
      edit={ProductEdit}
      create={ProductCreate}
    >
      <Route path=":id/types" element={<ProductTypes />} />
    </Resource>
  </Admin>
);
