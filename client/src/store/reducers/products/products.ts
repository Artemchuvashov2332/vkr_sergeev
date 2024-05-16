import { createSlice } from "@reduxjs/toolkit";
import { finishingMaterials, ledProducts } from "../../../__mocks__";

// const initialState: IProduct[] = [];

const products = createSlice({
  name: "products",
  initialState: ledProducts,
  reducers: {},
});

export default products.reducer;
