import { createSlice } from "@reduxjs/toolkit";
import { finishingMaterials, ledProducts } from "../../../__mocks__";
import { IProduct } from "../../../types";

const initialState: IProduct[] = [];

const products = createSlice({
  name: "products",
  initialState,
  reducers: {
    fakeFetchProducts: () => ledProducts
  },
});

export const { fakeFetchProducts } = products.actions

export default products.reducer;
