import {
  ArrayInput,
  Create,
  ImageField,
  ImageInput,
  NumberInput,
  SimpleForm,
  SimpleFormIterator,
  TextInput,
} from "react-admin";

export const ProductCreate = () => (
  <Create>
    <SimpleForm>
      <TextInput source="name" isRequired />
      <NumberInput source="price" isRequired />
      <NumberInput source="rating" />
      <TextInput source="description" multiline fullWidth />
      <TextInput source="summaryDescription" multiline fullWidth />
      <NumberInput source="amount" isRequired />
      <ImageInput
        source="image"
        label="Image"
        accept="image/*"
        multiple={false}
        isRequired
      >
        <ImageField source="src" title="title" />
      </ImageInput>
      <ArrayInput source="characteristics">
        <SimpleFormIterator>
          <TextInput source="title" label="Characteristic Title" />
          <TextInput source="description" label="Characteristic Description" />
        </SimpleFormIterator>
      </ArrayInput>
    </SimpleForm>
  </Create>
);
