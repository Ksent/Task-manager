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
  },
});

export const { openCalendar } = calendarSlice.actions;

export default calendarSlice.reducer;