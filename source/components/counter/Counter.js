import React from 'react';
import { useSelector } from 'react-redux';

function Counter() {
  const tasks = useSelector(state => state.tasks.tasks);
  const checkedTasks = tasks.filter(task => task.checked === true);

  return (
    <p className="app-header__counter counter">
      <span className="counter__number">
        {checkedTasks.length}/{tasks.length}
      </span>
      <span className="counter__text">Выполнено</span>
    </p>
  );
}

export default Counter;