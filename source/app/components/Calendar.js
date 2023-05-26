import React from 'react';

function Calendar() {
  return (
    <li className="tasker__search-item calendar">
      <button 
        className="calendar__button button"
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
      </button>
    </li>
  );
}

export default Calendar;