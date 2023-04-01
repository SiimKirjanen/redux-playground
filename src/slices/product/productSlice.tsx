import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { Product } from '../../interfaces/Product';

export interface productState {
    products: Product[],
    loading: boolean,
    error: string|undefined
};

const initialState: productState = {
  products: [],
  loading: false,
  error: ''
};

export const fetchProducts = createAsyncThunk('products/fetchProducts', async () => {
  const response = await fetch('https://dummyjson.com/products');
  const data = await response.json();

  return data.products;
})

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, state => {
      state.loading = true
    })
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.loading = false
      state.products = action.payload
      state.error = ''
    })
    builder.addCase(fetchProducts.rejected, (state, action) => {
      state.loading = false
      state.products = []
      state.error = action.error.message
    })
  },
});

export default productSlice.reducer;