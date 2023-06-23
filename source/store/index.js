import { configureStore } from '@reduxjs/toolkit';

import modalReducer from './modalSlice';
import filterReducer from './filterSlice';
import taskReducer from './taskSlice';

const store = configureStore({
  reducer: {
    modalWindow: modalReducer,
    filters: filterReducer,
    tasks: taskReducer,
  },
});

export default store;