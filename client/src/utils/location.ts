import qs from "qs";
import { SetURLSearchParams, useLocation, useSearchParams } from "react-router-dom";

interface SearchParams {
    [key: string]: undefined | string | string[] | SearchParams | SearchParams[]
}


export const useSearch = <T = SearchParams>(): [T, SetURLSearchParams] => {
    const location = useLocation()
    const [_, setSearchParams] = useSearchParams();

    const searchParams = qs.parse(location.search, { ignoreQueryPrefix: true }) as T;

    return [
        searchParams,
        setSearchParams,
    ]
}