import { Datagrid, DateField, ImageField, List, TextField } from "react-admin";

export const TypeList = () => (
  <List>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="code" />
      <TextField source="title" />
      <ImageField source="image" title="desc" src="url" sortable={false} />
      <DateField source="createdAt" />
      <DateField source="updatedAt" />
    </Datagrid>
  </List>
);
