import { createAsyncThunk } from "@reduxjs/toolkit";
import { callAPI } from "../../../api";
import qs from "qs";

export const fetchProductsThunk = createAsyncThunk(
  "products/fetchProducts",
  async (
    params: { type?: string; search?: string } | undefined = {},
    { rejectWithValue }
  ) => {
    try {
      const { data } = await callAPI.get(`api/product?${qs.stringify(params)}`);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
