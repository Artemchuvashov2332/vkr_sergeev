import { Datagrid, DateField, ImageField, List, TextField } from "react-admin";
import { getImageUrl } from "../../utils";

export const CategoryList = () => (
  <List>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="code" />
      <TextField source="title" />
      <ImageField source="image" title="desc" src="url" />
      <DateField source="createdAt" />
      <DateField source="updatedAt" />
    </Datagrid>
  </List>
);
