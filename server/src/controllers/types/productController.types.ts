import {
  RequestWithBody,
  RequestWithParams,
  RequestWithQuery,
} from "../../types/request";

export type ProductControllerCreateReq = RequestWithBody<{
  amount: number;
  name: string;
  price: string;
  categoryId: number;
  typeId: number;
  rating?: string;
  summary?: string;
  description?: string;
  characteristics: string;
}>;

export type ProductControllerGetOneReq = RequestWithParams<{
  id: number;
  search?: string;
}>;

export type ProductControllerGetAllReq = RequestWithQuery<{
  categoryId?: number;
  typeId?: number;
  limit?: number;
  page?: number;
  search?: string;
}>;
