import { createSlice } from '@reduxjs/toolkit';
import { fetchAllNannies } from './operations';

const initialState = {
  items: [],
  total: 28,
  page: 1,
  limit: 3,
  loading: false,
  error: null,
};

const slice = createSlice({
  name: 'nannies',
  initialState,
  reducers: {
    setPage: (state, action) => {
      state.page = action.payload;
    },
    setLimit: (state, action) => {
      state.limit = action.payload;
    },
  },
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
export const { setPage, setLimit } = slice.actions;
