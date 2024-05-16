import { RootState } from "../store";

export const getProducts = (state: RootState) => state.products;

export const getFiltredProduct = (state: RootState) => {
  const { products, filter } = state;

  const productFilter = filter.find(({ key }) => key === "products");

  if (productFilter) {
    const filtredProducts = products.filter((product) => {
      return Object.entries(productFilter.fields).every(([key, value]) => {
        console.debug({ key, value, product });
        if (key === "price") {
          // @ts-expect-error поправить
          return value.min <= product.price && product.price <= value.max;
        }

        if (key === "raiting") {
          return !value || product.rating >= value;
        }

        return true;
      });
    });

    console.debug({ filtredProducts });
    return filtredProducts;
  }

  return products;
};
