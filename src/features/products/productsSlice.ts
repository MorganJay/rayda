import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { RootState } from '../../app/store';
import { Currency, Product } from '../../constants/types';
import { getCurrencySymbol } from '../../utils/productFunctions';

import { Products } from '../../assets';

export interface ProductsState {
  products: Product[];
  status: 'idle' | 'loading' | 'failed';
  currency: Currency;
}

const initialState: ProductsState = {
  products: Products || 0,
  status: 'idle',
  currency: 'USD',
};

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    switchCurrency: (state, action: PayloadAction<Currency>) => {
      state.currency = action.payload;
    },
  },
});

export const { switchCurrency } = productsSlice.actions;

export const selectProductState = (state: RootState) => state.products;

export const selectCurrencySymbol = (state: RootState) =>
  getCurrencySymbol(state.products.currency);

export default productsSlice.reducer;
