import { configureStore } from '@reduxjs/toolkit';
import { authReducer } from './auth/slice.js';
import { modalReducer } from './modal/slice.js';
import { nanniesReducer } from './nannies/slice.js';

const store = configureStore({
  reducer: {
    auth: authReducer,
    modal: modalReducer,
    nannies: nanniesReducer,
  },
});

export default store;
