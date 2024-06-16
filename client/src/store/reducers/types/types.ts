import { createSlice } from "@reduxjs/toolkit";
import { fetchTypesThunk } from "./types.thunk";
import { IProductGroup } from "../../../types";

const initialState: { count: number; items: IProductGroup[] } = {
  count: 0,
  items: [],
};

export const types = createSlice({
  name: "types",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchTypesThunk.fulfilled, (_state, action) => {
      const { count, rows } = action.payload;
      return { count, items: rows };
    });
  },
});

export default types.reducer;
