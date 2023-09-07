import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { openCalendar } from '../../store/calendarSlice';
import { endSearch, addFilter } from '../../store/taskSlice';
import Button from '../generic/Button';
import { IconCalendar } from '../icons/Icons';
import CalendarSlider from './CalendarSlider';

function Calendar({ className, setSearchQuery }) {
  const dispatch = useDispatch();
  const searchValue = useSelector(state => state.tasks.searchValue);
  const calendarShow = useSelector(state => state.calendarItems.calendarShow);

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
    <li className={className}>
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