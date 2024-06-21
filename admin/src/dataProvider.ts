import { combineDataProviders, fetchUtils } from "react-admin";
import simpleRestProvider from "ra-data-simple-rest";
import qs from "qs";
import { convertToFormData, getImageUrl } from "./utils";

const fetchJson = (url: string, options: fetchUtils.Options = {}) => {
  const customHeaders = (options.headers ||
    new Headers({
      Accept: "application/json",
    })) as Headers;

  customHeaders.set("Content-Range", "posts 0-24/319");
  options.headers = customHeaders;
  return fetchUtils.fetchJson(url, options);
};
const apiUrl = import.meta.env.VITE_SIMPLE_REST_URL;
const httpClient = fetchJson;

const baseDataProvider = simpleRestProvider(apiUrl, httpClient);

export const categoryProvider = {
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
  getOne: (resource, params) => {
    const url = `${apiUrl}/${resource}/${params.id}`;

    return httpClient(url).then(({ json }) => ({
      data: {
        ...json,
        image: [{ url: getImageUrl(json.image), desc: json.title }],
      },
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

    return httpClient(url).then(({ json }) => ({
      data: json.rows.map((row) => ({
        ...row,
        image: [{ url: getImageUrl(row.image), desc: row.title }],
      })),
      total: json.count,
    }));
  },
  getManyReference: (resource, params) => {
    const url = `${apiUrl}/${resource}/forTypes?${qs.stringify({
      [params.target]: params.id,
    })}`;

    return httpClient(url).then(({ json }) => ({
      data: json.rows.map((row) => ({
        ...row,
        image: [{ url: getImageUrl(row.image), desc: row.title }],
      })),
      total: json.count,
    }));
  },
  update: (resource, params) => {
    const url = `${apiUrl}/${resource}/${params.id}`;

    const formData = new FormData();
    formData.append("code", params.data.code);
    formData.append("title", params.data.title);
    formData.append("image", params.data.image.rawFile);

    return httpClient(url, {
      method: "PUT",
      body: formData,
    }).then(({ json }) => ({
      data: { ...params.data, id: json.id },
    }));
  },
};

export const typeProvider = {
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
  getOne: (resource, params) => {
    const url = `${apiUrl}/${resource}/${params.id}`;

    return httpClient(url).then(({ json }) => ({
      data: {
        ...json,
        image: [{ url: getImageUrl(json.image), desc: json.title }],
      },
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

    return httpClient(url).then(({ json }) => ({
      data: json.rows.map((row) => ({
        ...row,
        image: [{ url: getImageUrl(row.image), desc: row.title }],
      })),
      total: json.count,
    }));
  },
  getManyReference: (resource, params) => {
    const url = `${apiUrl}/${resource}/forProducts?${qs.stringify({
      [params.target]: params.id,
    })}`;

    return httpClient(url).then(({ json }) => ({
      data: json.rows.map((row) => ({
        ...row,
        image: [{ url: getImageUrl(row.image), desc: row.title }],
      })),
      total: json.count,
    }));
  },
  update: (resource, params) => {
    const url = `${apiUrl}/${resource}/${params.id}`;

    const formData = new FormData();
    formData.append("code", params.data.code);
    formData.append("title", params.data.title);
    formData.append("image", params.data.image.rawFile);

    return httpClient(url, {
      method: "PUT",
      body: formData,
    }).then(({ json }) => ({
      data: { ...params.data, id: json.id },
    }));
  },
  updateTypeCategory: (resource, params) => {
    const url = `${apiUrl}/${resource}/${params.typeId}/updateCategories`;

    return httpClient(url, {
      method: "PUT",
      body: JSON.stringify(params),
    });
  },
};

export const productProvider = {
  ...baseDataProvider,
  create: (resource, params) => {
    const formData = convertToFormData({
      ...params.data,
      image: params.data.image.rawFile,
    });

    return httpClient(`${apiUrl}/${resource}`, {
      method: "POST",
      body: formData,
    }).then(({ json }) => ({
      data: { ...params.data, id: json.id },
    }));
  },
  getOne: (resource, params) => {
    const url = `${apiUrl}/${resource}/${params.id}`;

    return httpClient(url).then(({ json }) => ({
      data: {
        ...json,
        image: [{ url: getImageUrl(json.image), desc: json.title }],
      },
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

    return httpClient(url).then(({ json }) => ({
      data: json.rows.map((row) => ({
        ...row,
        image: [{ url: getImageUrl(row.image), desc: row.title }],
      })),
      total: json.count,
    }));
  },
  update: (resource, params) => {
    const url = `${apiUrl}/${resource}/${params.id}`;

    const formData = convertToFormData({
      ...params.data,
      image: params.data.image.rawFile,
    });

    return httpClient(url, {
      method: "PUT",
      body: formData,
    }).then(({ json }) => ({
      data: { ...params.data, id: json.id },
    }));
  },
  updateProductType: (resource, params) => {
    const url = `${apiUrl}/${resource}/${params.productId}/updateType`;

    return httpClient(url, {
      method: "PUT",
      body: JSON.stringify(params),
    });
  },
};

export const dataProvider = combineDataProviders((resource) => {
  switch (resource) {
    case "category":
      return categoryProvider;
    case "type":
      return typeProvider;
    case "product":
      return productProvider;
    default:
      return baseDataProvider;
  }
});
