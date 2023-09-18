import { configureStore } from '@reduxjs/toolkit';

import modalReducer from './modalSlice';
import calendarReducer from './calendarSlice';
import filterReducer from './filterSlice';
import taskReducer from './taskSlice';

const store = configureStore({
  reducer: {
    modalWindow: modalReducer,
    calendarItems: calendarReducer,
    filters: filterReducer,
    tasks: taskReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;