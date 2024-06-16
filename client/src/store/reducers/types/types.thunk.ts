import { createAsyncThunk } from "@reduxjs/toolkit";
import { callAPI } from "../../../api";
import qs from "qs";
import { APIResponceWithCount } from "../../../api/types";
import { IProductGroup } from "../../../types";

export const fetchAllTypesThunk = createAsyncThunk(
  "types/fetchAllTypes",
  async (_a, { rejectWithValue }) => {
    try {
      const { data } = await callAPI.get<APIResponceWithCount<IProductGroup>>(
        `api/type/all`
      );
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const fetchTypesThunk = createAsyncThunk(
  "types/fetchTypes",
  async (params: { categoryId?: number } = {}, { rejectWithValue }) => {
    try {
      const { data } = await callAPI.get<APIResponceWithCount<IProductGroup>>(
        `api/type/one?${qs.stringify(params)}`
      );
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
