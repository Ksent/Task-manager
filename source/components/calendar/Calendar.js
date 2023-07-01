import React from 'react';

import Button from '../generic/Button';
import { IconCalendar } from '../icons/Icons';

function Calendar() {
  return (
    <li className="app-header__item calendar">
      <Button 
        tagName="button"
        buttonClass="calendar__button"
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
    </li>
  );
}

export default Calendar;