import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const FetchSearchProduct = createAsyncThunk(
    'product/search',
    async (id) => {
        const response = await axios.get(`https://fakestoreapi.com/products/${id}`)
        return response?.data
    }
)

const SearchCartSlice = createSlice({
    name: 'product',
    initialState: {
        item: null,
        status: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(FetchSearchProduct.pending, (state, action) => {
            state.status = 'pending'
        })
        builder.addCase(FetchSearchProduct.fulfilled, (state, action) => {
            state.status = 'success'
            state.item = action.payload
        })
        builder.addCase(FetchSearchProduct.rejected, (state, action) => {
            state.status = 'rejected'
        })
    }
})

export default SearchCartSlice.reducer