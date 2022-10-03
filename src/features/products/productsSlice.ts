import { createSlice } from '@reduxjs/toolkit';

import { RootState } from '../../app/store';
import { Product } from '../../constants/types';

import { Products } from '../../assets';

export interface ProductsState {
  products: Product[];
  status: 'idle' | 'loading' | 'failed';
}

const initialState: ProductsState = {
  products: Products,
  status: 'idle',
};

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
});

export const selectProductState = (state: RootState) => state.products;

export default productsSlice.reducer;
