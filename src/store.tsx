import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import logger from 'redux-logger';

import counterReducer from './slices/counter/counterSlice';
import userReducer from './slices/user/userSlice';
import productReducer  from './slices/product/productSlice';

const store = configureStore({
  reducer: {
    counter: counterReducer,
    user: userReducer,
    product: productReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;

export default store;