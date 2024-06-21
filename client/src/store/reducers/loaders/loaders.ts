import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState: string[] = [];

const loaders = createSlice({
  name: "loaders",
  initialState,
  reducers: {
    setLoader: (state, action: PayloadAction<string>) => {
      state.push(action.payload);
    },
    unSetLoader: (state, action: PayloadAction<string>) => {
      return state.filter((loaderName) => loaderName !== action.payload);
    },
    resetLoaders: () => {
      return initialState;
    },
  },
});

export const { setLoader, unSetLoader, resetLoaders } = loaders.actions;

export default loaders.reducer;
