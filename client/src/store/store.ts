import { configureStore } from "@reduxjs/toolkit";
import { products, filters } from "./reducers";

const store = configureStore({
  reducer: {
    products,
    filters,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
