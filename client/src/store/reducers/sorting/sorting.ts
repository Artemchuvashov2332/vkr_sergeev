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
        },
        removeSorting: (state, action: PayloadAction<any>) => {
            const { key } = action.payload
            delete state[key]
        }
    }
})

export const { setSorting, removeSorting } = sorting.actions

export default sorting.reducer