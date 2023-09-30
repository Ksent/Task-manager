import React, { useEffect } from 'react';

import { ISearchQuery } from '../../types/search';
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHooks';

import { endSearch, addFilter } from '../../store/taskSlice';
import { openCalendar } from '../../store/calendarSlice';

import Button from '../generic/Button';
import { IconCalendar } from '../icons/Icons';
import CalendarSlider from './CalendarSlider';

function Calendar({ className, setSearchQuery }: ISearchQuery) {
  const dispatch = useAppDispatch();
  const searchValue = useAppSelector(state => state.tasks.searchValue);
  const calendarShow = useAppSelector(state => state.calendarItems.calendarShow);

  useEffect(() => {

    if (calendarShow === true) {
      dispatch(endSearch());
      dispatch(addFilter({ value: 'calendar' }));

      if (searchValue !== '') {
        setSearchQuery('');
      }

    } else if (calendarShow === false && searchValue === '') {
      dispatch(addFilter({ value: 'all' }));
    }
    
  }, [calendarShow]);

  return (
    <li className={className + " calendar"}>
      <Button 
        tagName="button"
        buttonClass={"calendar__button" + ((calendarShow === true) ? " calendar__button--open" : "")}
        handleClick={() => dispatch(openCalendar())}
      >
        <IconCalendar 
          className="calendar__icon button__icon"
          width="46"
          height="46"
          stroke="#ddecec"
        />
        <span className="calendar__subtitle button__subtitle">
          Календарь
        </span>
      </Button>
      <CalendarSlider 
        openCalendar={(calendarShow === true)}
      />
    </li>
  );
}

export default Calendar;