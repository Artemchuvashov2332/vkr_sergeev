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

export const TypeCategory: FC = () => {
  return (
    <Edit resource="type">
      <TypeEdit />
    </Edit>
  );
};

export const TypeEdit: FC = () => {
  const [relatedData, setRelatedData] = useState([]);
  const [checkedItems, setCheckedItems] = useState<{ [key: number]: boolean }>(
    {}
  );
  const record = useRecordContext();
  const dataProvider = useDataProvider();

  const { data, isLoading } = useGetManyReference("category", {
    target: "typeId",
    id: record?.id,
  });

  useEffect(() => {
    if (!isLoading) {
      setRelatedData(data);
      setCheckedItems(
        data.reduce((res, { id, checked }) => {
          res[id] = checked;
          return res;
        }, {})
      );
    }
  }, [data, isLoading]);

  const handleCheckboxChange = (id: number) => {
    setCheckedItems((state) => ({ ...state, [id]: !state[id] }));
  };

  const handleSendRequest = () => {
    dataProvider.updateTypeCategory("type", {
      typeId: record?.id,
      categories: checkedItems,
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
            checked={checkedItems[record.id]}
            onChange={() => handleCheckboxChange(record.id)}
          />
        </div>
      ))}
    </SimpleForm>
  );
};
