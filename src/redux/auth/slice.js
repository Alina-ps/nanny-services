import { createSlice } from '@reduxjs/toolkit';
import { registerThunk } from './operations.js';

const initialState = {
  user: {
    uid: null,
    email: null,
  },
  isLoggedIn: false,
  error: null,
};

const slice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(registerThunk.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
        state.error = null;
      })
      .addCase(registerThunk.rejected, (state, action) => {
        state.error = action.payload;
      });
  },
});

export const authReducer = slice.reducer;
