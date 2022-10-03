import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { RootState } from '../../app/store';
import { Currency } from '../../constants/types';
import { getCurrencySymbol } from '../../utils/productFunctions';

export interface CurrencyState {
  currency: Currency;
  symbol: string;
  toggleHidden: boolean;
}

const initialState: CurrencyState = {
  currency: 'USD',
  symbol: '$',
  toggleHidden: true,
};

export const currencySlice = createSlice({
  name: 'currency',
  initialState,
  reducers: {
    switchCurrency: (state, action: PayloadAction<Currency>) => {
      state.currency = action.payload;
      state.symbol = getCurrencySymbol(action.payload);
    },
    toggleSwitchHidden: state => {
      state.toggleHidden = !state.toggleHidden;
    },
    hideSwitch: state => {
      state.toggleHidden = true;
    },
  },
});

export const { switchCurrency, toggleSwitchHidden, hideSwitch } =
  currencySlice.actions;

export const selectCurrencyState = (state: RootState) => state.currency;

export default currencySlice.reducer;
