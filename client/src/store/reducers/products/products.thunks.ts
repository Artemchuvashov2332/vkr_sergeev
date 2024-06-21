import { createAsyncThunk } from "@reduxjs/toolkit";
import { callAPI } from "../../../api";
import { setLoader, unSetLoader } from "../loaders";
import qs from "qs";

export const fetchProductsThunk = createAsyncThunk(
  "products/fetchProducts",
  async (
    params: { type?: string; search?: string } | undefined = {},
    { dispatch, rejectWithValue }
  ) => {
    dispatch(setLoader("fetchProducts"));

    try {
      const { data } = await callAPI.get(`api/product?${qs.stringify(params)}`);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    } finally {
      dispatch(unSetLoader("fetchProducts"));
    }
  }
);
