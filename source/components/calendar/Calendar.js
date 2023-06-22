import React from 'react';

import Button from '../generic/Button';

function Calendar() {
  return (
    <li className="app-header__item calendar">
      <Button 
        tagName="button"
        buttonClass="calendar__button"
      >
        <svg 
          className="calendar__icon button__icon"
          width="46" 
          height="46" 
          fill="transparent"
          stroke="#ddecec"
        >
          <use href="#icon-calendar"></use>
        </svg>
        <span className="calendar__subtitle button__subtitle">
          Календарь
        </span>
      </Button>
    </li>
  );
}

export default Calendar;