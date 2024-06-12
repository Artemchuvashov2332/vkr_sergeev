import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchProducts } from "../../../api/fakeApi/products";
import { IProduct } from "../../../types";

export const fetchProductsThunk = createAsyncThunk('products/fetchProducts',
    async (params: { type?: string, search?: string } | undefined = {}, { rejectWithValue }) => {
        try {
            const { data } = await fetchProducts(params)
            return data
        } catch (error) {
            return rejectWithValue(undefined)
        }
    })