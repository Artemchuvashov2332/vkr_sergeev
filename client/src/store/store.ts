import { configureStore } from "@reduxjs/toolkit";
import { products, filters, sorting } from "./reducers";

const store = configureStore({
  reducer: {
    products,
    filters,
    sorting,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
