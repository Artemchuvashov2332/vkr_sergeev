import { FC, useEffect, useState } from "react";
import { Navbar, PageTemplate } from "../../components";
import { TypeShopModule } from "../../modules";
import { useGetPageTitleByRoute } from "../../utils";
import { useParams } from "react-router-dom";
import {
  fetchAllCategoriesThunk,
  fetchTypesThunk,
  getCategories,
  useAppDispatch,
  useAppSelector,
} from "../../store";

export const ProductTypesPage: FC = () => {
  const title = useGetPageTitleByRoute();
  const { category: code } = useParams<{ category: string }>();
  const { items: categories } = useAppSelector(getCategories);
  const types = useAppSelector((state) => state.types.items);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!categories.length) {
      dispatch(fetchAllCategoriesThunk());
    }
    const categoryId = categories.find(
      (category) => category.code === code
    )?.id;

    if (!categoryId) return;

    dispatch(fetchTypesThunk({ categoryId }));
  }, [categories, code]);

  return (
    <PageTemplate title={title}>
      <Navbar />
      <TypeShopModule items={types} />
    </PageTemplate>
  );
};
