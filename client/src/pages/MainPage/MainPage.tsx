import { FC, useEffect } from "react";
import { Loader, Navbar, PageTemplate } from "../../components";
import { CategoryShopModule } from "../../modules";
import { isLoading, useGetPageTitleByRoute } from "../../utils";
import {
  fetchAllCategoriesThunk,
  useAppDispatch,
  useAppSelector,
} from "../../store";

export const MainPage: FC = () => {
  const title = useGetPageTitleByRoute();
  const { items: categories } = useAppSelector((state) => state.categories);
  const dispatch = useAppDispatch();

  const loaders = useAppSelector((state) => state.loaders);
  const isLoadingData = isLoading(loaders, "fetchCategories");

  useEffect(() => {
    if (!categories.length) {
      dispatch(fetchAllCategoriesThunk());
    }
  }, [categories]);

  if (isLoadingData) {
    return <Loader />;
  }

  return (
    <PageTemplate title={title}>
      <Navbar />
      <CategoryShopModule items={categories} />
    </PageTemplate>
  );
};
