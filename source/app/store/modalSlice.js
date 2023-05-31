import { createSlice } from '@reduxjs/toolkit';

const modalSlice = createSlice({
  name: 'modalItems',
  initialState: {
    modalItems: [],
  },
  reducers: {
    openModalWindow(state, action) {
      state.modalItems = [];
      state.modalItems.push({
        id: action.payload.id,
        title: null,
      });
      
      const modalIndex = state.modalItems.find(modalItem => modalItem.id === action.payload.id);
      
      switch (modalIndex.id) {
        case 1:
          modalIndex.title = 'Добавить задачу';
          break;
        case 2:
          modalIndex.title = 'Редактировать задачу';
          break;
      }

    }
  },
});

export const { openModalWindow } = modalSlice.actions;

export default modalSlice.reducer;