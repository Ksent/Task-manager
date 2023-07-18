import { createSlice } from '@reduxjs/toolkit';

const fullDate = new Date();
const weekDay = fullDate.getDay();
// День недели
const monthDay = fullDate.getDate();
// День месяца
const month = fullDate.getMonth();
// Номер месяца (индекс)

function getWeek(result) {
  const countDayOnMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  // Кол-во дней в каждом месяце
  const week = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
  let countMonthDay;
  // Проверка что бы всегда начинать выстаривать текущую неделю с понедельника
  if (weekDay > 1) {
    countMonthDay = monthDay - (weekDay - 1);
  } else if (weekDay === 0) {
    countMonthDay = monthDay - 6;
  } else {
    countMonthDay = monthDay;
  }
  // Постраение итогового массива 
  for (let i = 0; i < week.length; i++) {
    // Если countMonthDay больше кол-ва дней в месяце
    // дни начинаются сначала
    if ((countMonthDay + i) > countDayOnMonth[month]) {
      let count = countDayOnMonth[month] - (countMonthDay + (week.length - 1));

      result.push({
        id: 0 + i,
        week: week[i], 
        day: (count + i),
      });
    } else {
      result.push({
        id: 0 + i,
        week: week[i],
        day: (countMonthDay + i),
      });
    }

  }
  
  return result;
}

const calendarSlice = createSlice({
  name: 'calendarItems',
  initialState: {
    calendarToday: 
      {id: 1, fullMonth: fullDate.toLocaleString('default', { month: 'long' }),
      fullYear: fullDate.toLocaleString('default', { year: 'numeric' }),
      fullWeek: fullDate.toLocaleString('default', { weekday: 'short' })},
    calendarItems: [],
    calendarShow: false,
  },
  reducers: {
    toggleCalendar(state) {
      state.calendarShow = !state.calendarShow;
      
      if (state.calendarShow === true) {
        state.calendarItems.length = 0;
        getWeek(state.calendarItems);
        console.log(state.calendarItems.map(calendarItem => calendarItem))
      }

    },
  },
});

export const { toggleCalendar } = calendarSlice.actions;

export default calendarSlice.reducer;