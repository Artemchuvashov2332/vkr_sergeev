import { fetchUtils } from "react-admin";
import simpleRestProvider from "ra-data-simple-rest";
import qs from "qs";
import { getImageUrl } from "./utils";

const fetchJson = (url: string, options: fetchUtils.Options = {}) => {
  const customHeaders = (options.headers ||
    new Headers({
      Accept: "application/json",
    })) as Headers;
  // add your own headers here
  customHeaders.set("Content-Range", "posts 0-24/319");
  options.headers = customHeaders;
  return fetchUtils.fetchJson(url, options);
};
const apiUrl = import.meta.env.VITE_SIMPLE_REST_URL;
const httpClient = fetchJson;

const baseDataProvider = simpleRestProvider(apiUrl, httpClient);

export const dataProvider = {
  ...baseDataProvider,
  create: (resource, params) => {
    const formData = new FormData();
    formData.append("code", params.data.code);
    formData.append("title", params.data.title);
    formData.append("image", params.data.image.rawFile);

    return httpClient(`${apiUrl}/${resource}`, {
      method: "POST",
      body: formData,
    }).then(({ json }) => ({
      data: { ...params.data, id: json.id },
    }));
  },
  getList: (resource, params) => {
    const { page, perPage } = params.pagination;
    const { field, order } = params.sort;
    const query = {
      sort: JSON.stringify([field, order]),
      range: JSON.stringify([(page - 1) * perPage, page * perPage - 1]),
      filter: JSON.stringify(params.filter),
    };
    const url = `${apiUrl}/${resource}?${qs.stringify(query)}`;

    return httpClient(url).then(({ headers, json }) => ({
      data: json.rows.map((row) => ({
        ...row,
        image: [{ url: getImageUrl(row.image), desc: row.title }],
      })),
      total: json.count,
    }));
  },
};
