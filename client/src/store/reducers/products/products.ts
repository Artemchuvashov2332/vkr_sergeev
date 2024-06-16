import { createSlice } from "@reduxjs/toolkit";
import { IProduct } from "../../../types";
import { fetchProductsThunk } from "./products.thunks";

const initialState: IProduct[] = [];

const products = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      fetchProductsThunk.fulfilled,
      (_, action) => action.payload.rows
    );
  },
});

export default products.reducer;
