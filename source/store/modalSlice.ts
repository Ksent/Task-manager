import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IModalState } from '../types/modal';

const initialState: IModalState = {
  modalShow: false,
  modalItems: [],
}

const modalSlice = createSlice({
  name: 'modalWindow',
  initialState,
  reducers: {
    openModalWindow(state) {
      state.modalShow = true;
    },
    getModalId(state, action: PayloadAction<{ id: string }>) {
      state.modalItems = [];
      state.modalItems.push({
        id: action.payload.id,
      });
    },
    closeModalWindow(state) {
      state.modalShow = false;
    },
  },
});

export const { openModalWindow, getModalId, closeModalWindow } = modalSlice.actions;

export default modalSlice.reducer;