import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import _ from "lodash";

type FilterItemType = {
  key: string,
  values: Record<string, unknown>
};

const initialState: FilterItemType[] = [];

const filters = createSlice({
  name: "products",
  initialState: initialState,
  reducers: {
    setFilter: (state, action: PayloadAction<{ key: string, values: Record<string, unknown> }>) => {
      const { key, values } = action.payload;
      const currentFilterIndex = state.findIndex((filter) => filter.key === key);

      currentFilterIndex === -1
        ? state.push({ key, values })
        : state[currentFilterIndex].values = values;
    },
    removeFilter: (
      state,
      action: PayloadAction<{ key: string }>
    ) => {
      const filtredState = state.filter(
        (filter) => filter.key !== action.payload.key
      );
      return filtredState;
    },
    resetFilters: () => initialState
  },
});

export const { setFilter, removeFilter, resetFilters } = filters.actions;

export default filters.reducer;
