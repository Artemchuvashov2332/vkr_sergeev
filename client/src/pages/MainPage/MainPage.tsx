import { FC, useEffect } from "react";
import { Navbar, PageTemplate } from "../../components";
import { CategoryShopModule } from "../../modules";
import { useGetPageTitleByRoute } from "../../utils";
import {
  fetchAllCategoriesThunk,
  useAppDispatch,
  useAppSelector,
} from "../../store";

export const MainPage: FC = () => {
  const title = useGetPageTitleByRoute();
  const { items: categories } = useAppSelector((state) => state.categories);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!categories.length) {
      dispatch(fetchAllCategoriesThunk());
    }
  }, []);

  return (
    <PageTemplate title={title}>
      <Navbar />
      <CategoryShopModule items={categories} />
    </PageTemplate>
  );
};
