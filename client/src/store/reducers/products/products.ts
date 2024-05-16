import { createSlice } from "@reduxjs/toolkit";
import { finishingMaterials } from "../../../__mocks__";

// const initialState: IProduct[] = [];

const products = createSlice({
  name: "products",
  initialState: finishingMaterials,
  reducers: {},
});

export default products.reducer;
