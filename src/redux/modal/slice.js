import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isOpen: false,
  type: null,
};

const slice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openModal: (state, action) => {
      state.isOpen = true;
      state.type = action.payload;
    },
    closeModal: () => {
      return initialState;
    },
  },
});

export const modalReducer = slice.reducer;
export const { openModal, closeModal } = slice.actions;
