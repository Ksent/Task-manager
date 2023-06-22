import { configureStore } from '@reduxjs/toolkit';

import modalReducer from './modalSlice';
import searchReducer from './searchSlice';
import filterReducer from './filterSlice';
import taskReducer from './taskSlice';

const store = configureStore({
  reducer: {
    modalWindow: modalReducer,
    searchForm: searchReducer,
    filters: filterReducer,
    tasks: taskReducer,
  },
});

export default store;