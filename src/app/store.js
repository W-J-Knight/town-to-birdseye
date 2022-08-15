import { configureStore } from '@reduxjs/toolkit';
import { to } from 'react-spring';
import { townReducer } from '../features/town/townSlice'; 

export const store = configureStore({
  reducer: {
    town: townReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([logger])
});
