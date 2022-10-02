import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { RootState } from '../../app/store';
import { Product } from '../../constants/types';
import {
  addItemToCart,
  removeItemFromCart,
  selectCartTotal,
  selectCartItemsCount,
} from './cart.utils';

export interface CartState {
  products: Product[];
  hidden: boolean;
}

const initialState: CartState = {
  products: [],
  hidden: true,
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    toggleCartHidden: state => {
      state.hidden = !state.hidden;
    },

    addProduct: (state, action: PayloadAction<Product>) => {
      state.products = addItemToCart(action.payload, state.products);
    },

    removeProduct: (state, action: PayloadAction<Product>) => {
      state.products = removeItemFromCart(state.products, action.payload);
    },
  },
});

export const { addProduct, removeProduct, toggleCartHidden } =
  cartSlice.actions;

export const selectCartState = (state: RootState) => state.cart;

export const selectCartStateTotal = (state: RootState) =>
  selectCartTotal(state.cart.products);
  
export const selectCartStateItemsCount = (state: RootState) =>
  selectCartItemsCount(state.cart.products);

export default cartSlice.reducer;
