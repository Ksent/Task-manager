import React from 'react';

import { useAppSelector } from '../../hooks/hooks';
import { IClassName } from '../../types/class';

function Counter({ className }: IClassName) {
  const tasks = useAppSelector(state => state.tasks.tasks);
  const checkedTasks = tasks.filter(task => task.checked === true);

  return (
    <p className={className + " counter"}>
      <span className="counter__number">
        {checkedTasks.length}/{tasks.length}
      </span>
      <span className="counter__text">Выполнено</span>
    </p>
  );
}

export default Counter;