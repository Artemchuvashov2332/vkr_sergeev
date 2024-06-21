import { configureStore } from "@reduxjs/toolkit";
import {
  products,
  filters,
  sorting,
  categories,
  types,
  loaders,
} from "./reducers";

const store = configureStore({
  reducer: {
    products,
    filters,
    sorting,
    categories,
    types,
    loaders,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
