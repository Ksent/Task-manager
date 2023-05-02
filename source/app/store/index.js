import { configureStore } from '@reduxjs/toolkit';

import taskReducer from './taskSlice';
import filterReducer from './filterSlice';

const store = configureStore({
  reducer: {
    tasks: taskReducer,
    filters: filterReducer,
  },
});

export default store;