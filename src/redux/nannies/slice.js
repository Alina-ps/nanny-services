import { createSlice } from '@reduxjs/toolkit';
import { fetchAllNannies } from './operations';

const initialState = {
  items: [],
  loading: false,
  error: null,
};

const slice = createSlice({
  name: 'nannies',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllNannies.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAllNannies.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchAllNannies.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const nanniesReducer = slice.reducer;
