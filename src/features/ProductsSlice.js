import { createSlice } from '@reduxjs/toolkit'
import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
  status: null,
  items: [],
}

export const ProductsFetch = createAsyncThunk(
  'products/productsfetch',
  async () => {
    const response = await axios.get('https://fakestoreapi.com/products')
    return response.data
  },
)
const ProductsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(ProductsFetch.pending, (state, action) => {
      state.status = 'pending'
    })
    builder.addCase(ProductsFetch.fulfilled, (state, action) => {
      state.status = 'success'
      state.items = action.payload
    })
    builder.addCase(ProductsFetch.rejected, (state, action) => {
      state.status = 'rejected'
    })
  },
})

export default ProductsSlice.reducer
