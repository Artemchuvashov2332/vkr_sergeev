import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import _ from "lodash";

// const initialState: IProduct[] = [];

interface IFilterItem {
  key: string;
  path: string;
  fields: Record<string, unknown>;
}

export type IFIlter = IFilterItem[];

const initialState: IFIlter = [];

const filters = createSlice({
  name: "products",
  initialState: initialState,
  reducers: {
    setFilter: (state, action: PayloadAction<IFilterItem>) => {
      const filterInStoreIndex = state.findIndex(
        (filter) => filter.key === action.payload.key
      );
      filterInStoreIndex !== -1
        ? (state[filterInStoreIndex] = action.payload)
        : state.push(action.payload);
    },
    clearFilter: (
      state,
      action: PayloadAction<{ key: IFilterItem["key"] }>
    ) => {
      const filtredState = state.filter(
        (filter) => filter.key !== action.payload.key
      );
      return filtredState;
    },
  },
});

export const { setFilter, clearFilter } = filters.actions;

export default filters.reducer;
