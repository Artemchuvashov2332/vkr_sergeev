import {
  Edit,
  SimpleForm,
  TextInput,
  ImageField,
  ImageInput,
} from "react-admin";

export const TypeEdit = () => {
  return (
    <Edit>
      <SimpleForm>
        <TextInput source="code" />
        <TextInput source="title" />
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
};
