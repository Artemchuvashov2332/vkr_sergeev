import {
  Datagrid,
  DateField,
  ImageField,
  List,
  NumberField,
  TextField,
} from "react-admin";
import { TypeLinkField } from "./ProductLink";

export const ProductList = () => (
  <List>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="name" />
      <NumberField source="price" />
      <NumberField source="rating" />
      <TextField source="description" />
      <TextField source="summaryDescription" />
      <NumberField source="amount" />
      <ImageField source="image" title="desc" src="url" sortable={false} />
      <DateField source="createdAt" />
      <DateField source="updatedAt" />
      <TypeLinkField />
    </Datagrid>
  </List>
);
