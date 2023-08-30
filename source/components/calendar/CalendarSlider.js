import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import DatePicker from 'react-datepicker';
import { format } from 'date-fns';
import ru from 'date-fns/locale/ru';

import { addDate, addFilter } from '../../store/taskSlice';

function CalendarSlider({ startDate, setStartDate }) {
  const dispatch = useDispatch();
  const tasks = useSelector(state => state.tasks.tasks);

  useEffect(() => {
    dispatch(addDate({ value: format(startDate, 'yyyy-MM-dd') }));
    dispatch(addFilter({ value: 'calendar' }));
  }, [startDate]);

  return (
    <div className="calendar__slider">
      <DatePicker 
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        highlightDates={tasks.map(date => new Date(date.date))}
        locale={ru}
        inline
        fixedHeight
      />
    </div>
  )
}

export default CalendarSlider;