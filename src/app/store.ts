import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { combineReducers } from 'redux';
import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';

import cartReducer from '../features/cart/cartSlice';
import currencyReducer from '../features/currency/currencySlice';
import productReducer from '../features/products/productsSlice';

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
  whitelist: ['cart', 'currency'],
};

const reducers = combineReducers({
  products: productReducer,
  cart: cartReducer,
  currency: currencyReducer,
});

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: getDefaultMiddleware => {
    if (process.env.NODE_ENV === 'development')
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      })
        .prepend(thunk)
        .concat(logger);

    return getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).prepend(thunk);
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
export const selectStore = (store: RootState) => store;
