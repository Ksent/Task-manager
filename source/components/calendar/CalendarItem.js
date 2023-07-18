import React from 'react';
import { useSelector } from 'react-redux';

function CalendarItem({ week, day, today }) {
  const dateNow = new Date().toLocaleDateString();
  const tasks = useSelector(state => state.tasks.tasks);
  const dateTasks = tasks.map(task => task.date);
  
  function findDate() {
    
    for (let i = 0; i < dateTasks.length; i++) {
      
      if ((new Date(dateTasks[i]).toLocaleDateString()) === dateNow) {
        console.log(dateTasks[i]);
        return " calendar__item--crumb";
      } else return "";

    }

  }

  return (
    <li className={"calendar__item" + (today.fullWeek === week ? " calendar__item--today" : findDate())}>
      <span className="calendar__week">{week}</span>
      <span className="calendar__day">{day}</span>
    </li>
  );
}

export default CalendarItem;