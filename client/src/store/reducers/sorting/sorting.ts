import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState: Record<string, any> = {}

const sorting = createSlice({
    name: "sorting",
    initialState,
    reducers: {
        setSorting: (state, action: PayloadAction<any>) => {
            const { key, type } = action.payload;
            state[key] = {
                type
            }
        }
    }
})

export const { setSorting } = sorting.actions

export default sorting.reducer