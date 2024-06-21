import { FC, useEffect, useState } from "react";
import {
  BooleanField,
  BooleanInput,
  Edit,
  SimpleForm,
  useDataProvider,
  useGetManyReference,
  useRecordContext,
} from "react-admin";

export const ProductTypes: FC = () => {
  return (
    <Edit resource="product">
      <TypeEdit />
    </Edit>
  );
};

export const TypeEdit: FC = () => {
  const [relatedData, setRelatedData] = useState([]);
  const [checkedItemId, setCheckedItemId] = useState<number | null>(null);
  const record = useRecordContext();
  const dataProvider = useDataProvider();

  const { data, isLoading } = useGetManyReference("type", {
    target: "productId",
    id: record?.id,
  });

  useEffect(() => {
    if (!isLoading) {
      setRelatedData(data);
      setCheckedItemId(data.find(({ checked }) => checked)?.id || null);
    }
  }, [data, isLoading]);

  const handleCheckboxChange = (id: number) =>
    setCheckedItemId(id === checkedItemId ? null : id);

  const handleSendRequest = () => {
    dataProvider.updateProductType("product", {
      productId: record?.id,
      type: checkedItemId,
    });
  };

  if (!record || !relatedData?.length) return null;

  return (
    <SimpleForm onSubmit={handleSendRequest}>
      {relatedData.map((record) => (
        <div key={record.id}>
          <BooleanField source="checked" record={record} />
          <span>{record.title}</span>
          <BooleanInput
            label=""
            source="checked"
            checked={record.id === checkedItemId}
            onChange={() => handleCheckboxChange(record.id)}
          />
        </div>
      ))}
    </SimpleForm>
  );
};
