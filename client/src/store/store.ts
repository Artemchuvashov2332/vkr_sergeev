import { configureStore } from "@reduxjs/toolkit";
import { products, filter } from "./reducers";

const store = configureStore({
  reducer: {
    products,
    filter,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;