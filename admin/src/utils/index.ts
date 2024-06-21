export const getImageUrl = (imageHash: string) =>
  `${import.meta.env.VITE_SERVER_HOST}/${imageHash}`;

export const convertToFormData = (
  data,
  parentKey = "",
  formData = new FormData()
) => {
  if (data && typeof data === "object" && !(data instanceof File)) {
    Object.keys(data).forEach((key) => {
      const value = data[key];
      const newKey = parentKey ? `${parentKey}[${key}]` : key;

      if (
        value &&
        typeof value === "object" &&
        !Array.isArray(value) &&
        !(value instanceof File)
      ) {
        convertToFormData(value, newKey, formData);
      } else if (Array.isArray(value)) {
        value.forEach((arrayItem, index) => {
          const arrayKey = `${newKey}[${index}]`;
          if (typeof arrayItem === "object" && !Array.isArray(arrayItem)) {
            convertToFormData(arrayItem, arrayKey, formData);
          } else {
            formData.append(arrayKey, arrayItem);
          }
        });
      } else {
        if (key === "rawFile") {
          formData.append(parentKey, value);
        } else {
          formData.append(newKey, value);
        }
      }
    });
  } else {
    formData.append(parentKey, data);
  }

  return formData;
};
