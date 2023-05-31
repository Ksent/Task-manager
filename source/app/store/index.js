import { configureStore } from '@reduxjs/toolkit';

import taskReducer from './taskSlice';
import filterReducer from './filterSlice';
import modalRefucer from './modalSlice';

const store = configureStore({
  reducer: {
    tasks: taskReducer,
    filters: filterReducer,
    modalItems: modalRefucer,
  },
});

export default store;