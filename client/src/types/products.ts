export interface IProduct {
  id: number;
  name: string;
  price: number;
  rating: number;
  image: string;
  typeId: number;
  categoryId: number;
  description: string;
  amount: number;
  summaryDescription?: string;
}

export interface IDetailedProduct extends IProduct {
  characteristics: {
    id: number;
    title: string;
    description: string;
  }[];
}

export interface IProductGroup {
  id: number;
  code: string;
  title: string;
  image: string;
}
