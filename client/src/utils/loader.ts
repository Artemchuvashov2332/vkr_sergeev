export const isLoading = (loaders: string[], actite: string | string[]) => {
  const activeLoadersArray = Array.isArray(actite) ? actite : [actite];

  return loaders.some((loader) => activeLoadersArray.includes(loader));
};
