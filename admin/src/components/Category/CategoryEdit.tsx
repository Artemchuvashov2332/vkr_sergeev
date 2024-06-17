import { DateInput, Edit, SimpleForm, TextInput } from "react-admin";

export const CategoryEdit = () => (
  <Edit>
    <SimpleForm>
      <TextInput source="id" />
      <TextInput source="code" />
      <TextInput source="title" />
      <TextInput source="image" />
      <DateInput source="createdAt" />
      <DateInput source="updatedAt" />
    </SimpleForm>
  </Edit>
);
