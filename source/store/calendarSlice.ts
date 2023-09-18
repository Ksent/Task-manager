import { createSlice } from '@reduxjs/toolkit';

import { ICalendarState } from '../types/calendar';

const initialState: ICalendarState = {
  calendarShow: false,
}

const calendarSlice = createSlice({
  name: 'calendarItems',
  initialState,
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