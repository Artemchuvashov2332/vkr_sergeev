import { createAsyncThunk } from "@reduxjs/toolkit";
import { callAPI } from "../../../api";
import qs from "qs";
import { APIResponceWithCount } from "../../../api/types";
import { IProductGroup } from "../../../types";
import { setLoader, unSetLoader } from "../loaders";

export const fetchAllTypesThunk = createAsyncThunk(
  "types/fetchAllTypes",
  async (_a, { dispatch, rejectWithValue }) => {
    dispatch(setLoader("fetchTypes"));

    try {
      const { data } = await callAPI.get<APIResponceWithCount<IProductGroup>>(
        `api/type/all`
      );
      return data;
    } catch (error) {
      return rejectWithValue(error);
    } finally {
      dispatch(unSetLoader("fetchTypes"));
    }
  }
);

export const fetchTypesThunk = createAsyncThunk(
  "types/fetchTypes",
  async (
    { categoryId }: { categoryId: number },
    { dispatch, rejectWithValue }
  ) => {
    dispatch(setLoader("fetchTypes"));

    try {
      const { data } = await callAPI.get<APIResponceWithCount<IProductGroup>>(
        `api/type/one?${qs.stringify({ categoryId })}`
      );
      return data;
    } catch (error) {
      return rejectWithValue(error);
    } finally {
      dispatch(unSetLoader("fetchTypes"));
    }
  }
);
