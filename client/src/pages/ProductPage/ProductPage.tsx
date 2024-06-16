import { FC, useEffect, useState } from "react";
import { Navbar, PageTemplate } from "../../components";
import { ProductModule } from "../../modules";
import { useSetPageTitle } from "../../utils";
import { useParams } from "react-router-dom";
import { callAPI } from "../../api";
import { IDetailedProduct } from "../../types";

export const ProductPage: FC = () => {
  const { id } = useParams<{ id: string }>();
  const [productData, setProductData] = useState<IDetailedProduct | null>(null);
  const title = productData?.name || "";

  useSetPageTitle(title);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const { data } = await callAPI.get<IDetailedProduct>(
          `api/product/${id}`
        );
        setProductData(data);
      } catch (error) {}
    };

    fetchProduct();
  }, []);

  if (!productData) return null;

  return (
    <PageTemplate title={title}>
      <Navbar />
      <ProductModule product={productData} />
    </PageTemplate>
  );
};
