import {
  Create,
  SimpleForm,
  TextInput,
  ImageInput,
  ImageField,
} from "react-admin";

export const TypeCreate = () => (
  <Create>
    <SimpleForm>
      <TextInput source="code" required />
      <TextInput source="title" required />
      <ImageInput
        source="image"
        label="Image"
        multiple={false}
        accept="image/*"
        isRequired
      >
        <ImageField source="src" title="title" />
      </ImageInput>
    </SimpleForm>
  </Create>
);
