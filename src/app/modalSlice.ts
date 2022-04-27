import { createSlice } from '@reduxjs/toolkit';
import { RootState } from './store';

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
    show: (state) => {
      state.isVisible = true;
    },
    hide: (state) => {
      state.isVisible = false;
    },
  },
});

export const { show, hide } = modalSlice.actions;

export const selectIsVisible = (state: RootState) => state.modal.isVisible;

export default modalSlice.reducer;
