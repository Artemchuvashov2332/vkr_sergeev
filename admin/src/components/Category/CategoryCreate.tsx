import {
  Create,
  SimpleForm,
  TextInput,
  FileInput,
  FileField,
} from "react-admin";

export const CategoryCreate = () => (
  <Create>
    <SimpleForm>
      <TextInput source="code" />
      <TextInput source="title" />
      <FileInput source="image">
        <FileField source="src" title="title" />
      </FileInput>
    </SimpleForm>
  </Create>
);
