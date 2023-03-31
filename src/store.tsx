import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';

import counterReducer from './slices/counter/counterSlice';
import userReducer from './slices/user/userSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    user: userReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch