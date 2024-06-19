import {
  Edit,
  SimpleForm,
  TextInput,
  ImageField,
  ImageInput,
  useRecordContext,
  useGetManyReference,
} from "react-admin";
import { useEffect, useState } from "react";

export const TypeEdit = () => {
  const [relatedData, setRelatedData] = useState([]);
  const record = useRecordContext();

  console.debug(record);

  const { data, isLoading } = useGetManyReference(
    "category", // Название ресурса связанной сущности
    {
      target: "type_id", // Поле, по которому связываются сущности
      id: 45, // ID редактируемой сущности
    }
  );

  useEffect(() => {
    if (!isLoading) {
      setRelatedData(data);
    }
  }, [data, isLoading]);

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

        {relatedData?.map((item) => (
          <div key={item.id}>
            {/* Отобразите необходимые поля связанной сущности */}
            <TextInput source={item.name} label="Related Item Name" />
          </div>
        ))}
      </SimpleForm>
    </Edit>
  );
};
