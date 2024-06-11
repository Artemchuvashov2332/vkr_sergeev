import { RootState } from "../store";

export const getProducts = (state: RootState) => state.products;

export const getFiltredProduct = (state: RootState) => {
  const { products, filters } = state;

  const productFilter = filters.find(({ key }) => key === "products");

  if (productFilter) {
    const filtredProducts = products.filter((product) => {
      return Object.entries(productFilter.values).every(([key, value]) => {
        if (key === "price") {
          // @ts-expect-error поправить
          return value.min <= product.price && product.price <= value.max;
        }

        if (key === "rating") {
          return !value || product.rating >= value;
        }

        return true;
      });
    });
    return filtredProducts;
  }

  return products;
};

export const getSortedItems = <IT extends any[]>({ state, items, key }: { state: RootState, key: string, items: IT }) => {
  const { sorting } = state
  const sortingType = sorting[key]?.type

  switch (sortingType) {
    case 'price_down':
      return items.sort((a, b) => b.price - a.price)
    case 'price_up':
      return items.sort((a, b) => a.price - b.price)
    case 'rating':
      return items.sort((a, b) => b.rating - a.rating)
    case 'name':
      return items.sort((a, b) => a.title.localeCompare(b.title, { sensitivity: 'base' }))
    default:
      return items
  }
}
