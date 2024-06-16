import { createSlice } from "@reduxjs/toolkit";
import { fetchAllCategoriesThunk } from "./categories.thunk";
import { IProductGroup } from "../../../types";

const initialState: { count: number; items: IProductGroup[] } = {
  count: 0,
  items: [],
};

export const categories = createSlice({
  name: "categories",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAllCategoriesThunk.fulfilled, (_state, action) => {
      const { count, rows } = action.payload;
      return {
        count,
        items: rows,
      };
    });
  },
});

export default categories.reducer;
