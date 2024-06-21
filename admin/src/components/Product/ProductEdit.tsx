import {
  ArrayInput,
  Edit,
  ImageField,
  ImageInput,
  NumberInput,
  SimpleForm,
  SimpleFormIterator,
  TextInput,
} from "react-admin";

export const ProductEdit = () => (
  <Edit>
    <SimpleForm>
      <TextInput source="name" />
      <NumberInput source="price" />
      <NumberInput source="rating" />
      <TextInput source="description" multiline fullWidth />
      <TextInput source="summaryDescription" multiline fullWidth />
      <NumberInput source="amount" />
      <ImageField source="image" src="url" title="desc" label="Image" />
      <ImageInput
        source="image"
        label="Image"
        accept="image/*"
        multiple={false}
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
  </Edit>
);
