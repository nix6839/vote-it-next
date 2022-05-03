import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from './store';

interface ModalState {
  isVisible: boolean;
}

const initialState: ModalState = {
  isVisible: false,
};

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    showModal: (state) => {
      state.isVisible = true;
    },
    hideModal: (state) => {
      state.isVisible = false;
    },
  },
});

export const { showModal, hideModal } = modalSlice.actions;

export const selectIsVisible = (state: RootState) => state.modal.isVisible;

export default modalSlice.reducer;
