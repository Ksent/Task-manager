import React, { lazy, Suspense, useEffect, useState } from 'react';
const DatePicker = lazy(() => import('react-datepicker'));
import format from 'date-fns/format';
import ru from 'date-fns/locale/ru';

import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { addDate, addFilter } from '../../store/taskSlice';
import Loader from '../loader/Loader';

interface IOpenCalendar {
  openCalendar: boolean,
}

function CalendarSlider({ openCalendar }: IOpenCalendar) {
  const dispatch = useAppDispatch();
  const tasks = useAppSelector(state => state.tasks.tasks);
  const [startDate, setStartDate] = useState<Date>(new Date());

  useEffect(() => {
    dispatch(addDate({ value: format(startDate, 'yyyy-MM-dd') }));
    dispatch(addFilter({ value: 'calendar' }));
  }, [startDate]);

  return (
    <div className={"calendar__slider" + (openCalendar ? " calendar__slider--open" : "")}>
      <Suspense fallback={<Loader />}>
        <DatePicker 
          selected={startDate}
          onChange={(date: Date) => setStartDate(date)}
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