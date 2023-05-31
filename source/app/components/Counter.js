import React from 'react';
import { useSelector } from 'react-redux';

function Counter() {
  const tasks = useSelector(state => state.tasks.tasks);
  const checkedTasks = tasks.filter(task => task.checked === true);

  return (
    <p className="header__counter">
      <span className="header__counter-number">
        {checkedTasks.length}/{tasks.length}
      </span>
      <span className="header__counter-text">Выполнено</span>
    </p>
  );
}

export default Counter;