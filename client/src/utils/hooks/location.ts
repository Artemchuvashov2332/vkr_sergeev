import qs from "qs";
import { useEffect } from "react";
import {
  SetURLSearchParams,
  useLocation,
  useParams,
  useSearchParams,
} from "react-router-dom";
import { COMMON_PAGE_TITLE, RouterPaths } from "../../constants";
// import { lumberProductTypes } from "../../__mocks__";
import { getCategories, useAppSelector } from "../../store";

interface SearchParams {
  [key: string]: undefined | string | string[] | SearchParams | SearchParams[];
}

export const useSearch = <T = SearchParams>(): [
  T,
  URLSearchParams,
  SetURLSearchParams
] => {
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();

  const parsedSearch = qs.parse(location.search, {
    ignoreQueryPrefix: true,
  }) as T;

  return [parsedSearch, searchParams, setSearchParams];
};

export const useGetPageTitleByRoute = () => {
  const { pathname, search } = useLocation();
  const { category, type } = useParams<{ [key in string]: string }>();
  const parsedSearch = qs.parse(search, { ignoreQueryPrefix: true });
  const { items: categories } = useAppSelector(getCategories);
  const { items: types } = useAppSelector((state) => state.types);

  let title = "";

  if (pathname in COMMON_PAGE_TITLE) title = COMMON_PAGE_TITLE[pathname];

  if (category && !type) {
    title = categories.find(({ code }) => code === category)?.title || "";
  }

  if (category && type) {
    title = types.find(({ code }) => code === type)?.title || "";
  }

  if (pathname === RouterPaths.SEARCH) {
    const { value: searchValue } = parsedSearch;
    title =
      searchValue && searchValue !== "all"
        ? `Поиск по товарам "${searchValue}"`
        : "Все товары";
  }

  return title;
};

export const useSetPageTitle = (title: string) => {
  useEffect(() => {
    document.title = title;
  }, [document.title, title]);

  return title;
};
