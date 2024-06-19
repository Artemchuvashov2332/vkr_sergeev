import {
  Admin,
  Resource,
  ListGuesser,
  EditGuesser,
  ShowGuesser,
} from "react-admin";
import { dataProvider } from "./dataProvider";
import { authProvider } from "./authProvider";
import {
  CategoryCreate,
  CategoryEdit,
  CategoryList,
  TypeEdit,
  TypeList,
} from "./components";

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
      create={ShowGuesser}
    />
  </Admin>
);
