import React, { lazy, Suspense, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
const DatePicker = lazy(() => import('react-datepicker'));
import format from 'date-fns/format';
import ru from 'date-fns/locale/ru';

import { addDate, addFilter } from '../../store/taskSlice';
import Loader from '../loader/Loader';

function CalendarSlider({ openCalendar }) {
  const dispatch = useDispatch();
  const tasks = useSelector(state => state.tasks.tasks);
  const [startDate, setStartDate] = useState(new Date());

  useEffect(() => {
    dispatch(addDate({ value: format(startDate, 'yyyy-MM-dd') }));
    dispatch(addFilter({ value: 'calendar' }));
  }, [startDate]);

  return (
    <div className={"calendar__slider" + (openCalendar ? " calendar__slider--open" : "")}>
      <Suspense fallback={<Loader />}>
        <DatePicker 
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          highlightDates={tasks.map(date => new Date(date.date))}
          locale={ru}
          inline
          fixedHeight
        />
      </Suspense>
    </div>
  )
}

export default CalendarSlider;