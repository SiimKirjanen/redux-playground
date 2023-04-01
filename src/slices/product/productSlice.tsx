import { createSlice, createAsyncThunk, createSelector } from '@reduxjs/toolkit';
import { Product } from '../../interfaces/Product';
import { RootState } from '../../store';

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

export const highestPriceItemSelector = createSelector(
  (state: RootState) => state.product.products,
  (products: Product[]) => products.reduce((prev: Product, current: Product) => {
    return (prev.price > current.price) ? prev : current
  } )
);

export default productSlice.reducer;