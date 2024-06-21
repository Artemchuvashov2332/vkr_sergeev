import { createAsyncThunk } from "@reduxjs/toolkit";
import { callAPI } from "../../../api";
import { APIResponceWithCount } from "../../../api/types";
import { IProductGroup } from "../../../types";
import { setLoader, unSetLoader } from "../loaders";

export const fetchAllCategoriesThunk = createAsyncThunk(
  "categories/fetchCategories",
  async (_a, { dispatch, rejectWithValue }) => {
    dispatch(setLoader("fetchCategories"));

    try {
      const { data } = await callAPI.get<APIResponceWithCount<IProductGroup>>(
        "/api/category"
      );
      return data;
    } catch (error: unknown) {
      return rejectWithValue(error);
    } finally {
      dispatch(unSetLoader("fetchCategories"));
    }
  }
);
