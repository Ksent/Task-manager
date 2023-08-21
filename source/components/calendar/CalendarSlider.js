import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import DatePicker from 'react-datepicker';
import { format } from 'date-fns';
import ru from 'date-fns/locale/ru';

import { addDate } from '../../store/taskSlice';

function CalendarSlider({ startDate, setStartDate }) {
  const dispatch = useDispatch();
  const calendarShow = useSelector(state => state.calendarItems.calendarShow);
  const tasks = useSelector(state => state.tasks.tasks);

  useEffect(() => {
    dispatch(addDate({ value: format(startDate, 'yyyy-MM-dd') }))
  });

  return (
    <div className={"calendar__slider" + (calendarShow === true ? " calendar__slider--open" : "")}>
      <div className="calendar__slider-inner">
        <DatePicker 
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          highlightDates={tasks.map(date => new Date(date.date))}
          locale={ru}
          inline
          fixedHeight
        />
      </div>
    </div>
  )
}

export default CalendarSlider;