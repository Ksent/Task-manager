import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { toggleCalendar } from '../../store/calendarSlice';
import Button from '../generic/Button';
import { IconCalendar } from '../icons/Icons';
import CalendarList from './CalendarList';

function Calendar() {
  const dispatch = useDispatch();
  const calendarShow = useSelector(state => state.calendarItems.calendarShow);

  return (
    <li className="app-header__item calendar">
      <Button 
        tagName="button"
        buttonClass={"calendar__button" + ((calendarShow === true) ? " calendar__button--open" : "")}
        handleClick={() => dispatch(toggleCalendar())}
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
      <CalendarList 
        openCalendar={(calendarShow === true)}
      />
    </li>
  );
}

export default Calendar;