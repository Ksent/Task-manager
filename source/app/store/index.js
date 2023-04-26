import { configureStore } from '@reduxjs/toolkit';

import filterReducer from './filterSlice';
import taskReducer from './taskSlice';

const store = configureStore({
  reducer: {
    filters: filterReducer,
    tasks: taskReducer,
  },
});

export default store;