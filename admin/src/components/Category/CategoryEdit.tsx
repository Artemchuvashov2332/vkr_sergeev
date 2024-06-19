import {
  Edit,
  ImageField,
  ImageInput,
  SimpleForm,
  TextInput,
} from "react-admin";

export const CategoryEdit = () => (
  <Edit>
    <SimpleForm>
      <TextInput source="code" required />
      <TextInput source="title" required />
      <ImageField source="image" src="url" title="desc" label="Image" />
      <ImageInput
        source="image"
        label="Image"
        accept="image/*"
        multiple={false}
      >
        <ImageField source="src" title="title" />
      </ImageInput>
    </SimpleForm>
  </Edit>
);
