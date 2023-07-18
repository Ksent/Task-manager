import React from 'react';
import { useSelector } from 'react-redux';

import { IconArrow } from '../icons/Icons';
import CalendarItem from './CalendarItem';

function CalendarList({ openCalendar }) {
const today = useSelector(state => state.calendarItems.calendarToday);
const calendarItems = useSelector(state => state.calendarItems.calendarItems);

  return (
    <div className={"calendar__slider" + (openCalendar ? " calendar__slider--open" : "")}>
      <div className="calendar__slider-inner">
        <button className="calendar__toggle calendar__toggle--left">
          <IconArrow 
            width="20" 
            height="20"
            stroke="#c4c4c4"
          />
        </button>
        <button className="calendar__toggle calendar__toggle--right">
          <IconArrow 
            width="20" 
            height="20"
            stroke="#c4c4c4"
          />
        </button>
        <h2 className="calendar__month">
          {today.fullMonth}
          <span className="calendar__year">{today.fullYear}</span>
        </h2>

        <ul className="calendar__list">
          {calendarItems.map(item => (
            <CalendarItem 
              key={item.id}
              today={today}
              {...item}
            />
          ))}
        </ul>
      </div>
    </div>
  )
}

export default CalendarList;