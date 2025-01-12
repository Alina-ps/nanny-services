import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isOpen: false,
};

const slice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openModal: (state) => {
      state.isOpen = true;
    },
    closeModal: () => {
      return initialState;
    },
  },
});

export const modalReducer = slice.reducer;
export const { openModal, closeModal } = slice.actions;
