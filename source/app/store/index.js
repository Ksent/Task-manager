import { configureStore } from '@reduxjs/toolkit';

import taskReducer from './taskSlice';
import filterReducer from './filterSlice';
import modalReducer from './modalSlice';

const store = configureStore({
  reducer: {
    tasks: taskReducer,
    filters: filterReducer,
    modalWindow: modalReducer,
  },
});

export default store;