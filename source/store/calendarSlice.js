import { createSlice } from '@reduxjs/toolkit';

const calendarSlice = createSlice({
  name: 'calendarItems',
  initialState: {
    calendarShow: false,
  },
  reducers: {
    openCalendar(state) {
      state.calendarShow = !state.calendarShow;
    },
    closeCalendar(state) {
      state.calendarShow = false;
    },
  },
});

export const { openCalendar, closeCalendar } = calendarSlice.actions;

export default calendarSlice.reducer;