export const getImageUrl = (imageHash: string) =>
  `${import.meta.env.VITE_SERVER_HOST}/${imageHash}`;
