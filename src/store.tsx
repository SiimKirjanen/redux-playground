import { PreloadedState, combineReducers, configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import logger from 'redux-logger';

import counterReducer from './slices/counter/counterSlice';
import userReducer from './slices/user/userSlice';
import productReducer  from './slices/product/productSlice';
import postReducer  from './slices/post/postsSlice';

const rootReducer = combineReducers({
  counter: counterReducer,
  user: userReducer,
  product: productReducer,
  post: postReducer
});

export function setupStore(preloadedState?: PreloadedState<RootState>) {
  return configureStore({
    reducer: rootReducer,
    preloadedState,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  })
};

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch'];
export const useAppDispatch: () => AppDispatch = useDispatch;