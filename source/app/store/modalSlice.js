import { createSlice } from '@reduxjs/toolkit';

const modalSlice = createSlice({
  name: 'modalWindow',
  initialState: {
    modalShow: false,
    modalItems: [],
  },
  reducers: {
    openModalWindow(state) {
      state.modalShow = true;
    },
    getModalId(state, action) {
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