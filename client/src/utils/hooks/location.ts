import qs from "qs";
import { useEffect } from "react";
import { SetURLSearchParams, useLocation, useParams, useSearchParams } from "react-router-dom";
import { COMMON_PAGE_TITLE, RouterPaths } from "../../constants";
import { categories, lumberProductTypes } from "../../__mocks__";

interface SearchParams {
    [key: string]: undefined | string | string[] | SearchParams | SearchParams[]
}


export const useSearch = <T = SearchParams>(): [T, URLSearchParams, SetURLSearchParams] => {
    const location = useLocation()
    const [searchParams, setSearchParams] = useSearchParams();

    const parsedSearch = qs.parse(location.search, { ignoreQueryPrefix: true }) as T;

    return [
        parsedSearch,
        searchParams,
        setSearchParams,
    ]
}

export const usePageTitle = () => {
    const { pathname, search } = useLocation()
    const { category, type } = useParams<{ [key in string]: string }>()
    const parsedSearch = qs.parse(search, { ignoreQueryPrefix: true });


    let title = ""

    if (pathname in COMMON_PAGE_TITLE) title = COMMON_PAGE_TITLE[pathname];

    if (category && !type) {
        title = categories.find(({ group }) => group === category)?.title || ''
    }

    if (category && type) {
        title = lumberProductTypes.find(({ group }) => group === type)?.title || ''
    }

    if (pathname === RouterPaths.SEARCH) {
        const { value: searchValue } = parsedSearch
        title = searchValue && searchValue !== 'all' ? `Поиск по товарам "${searchValue}"` : 'Все товары';
    }

    useEffect(() => {
        document.title = title
    }, [title])

    return title;
}