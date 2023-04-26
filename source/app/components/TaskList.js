import React from 'react';
import { useSelector } from 'react-redux';

import TaskItem from './TaskItem';

function TaskList() {
  const tasks = useSelector(state => state.tasks.tasks);

  return (
    <div className="tasker__main">
      <ul className="tasker__task-list">

        {tasks.map(task => (
          <TaskItem 
            key={task.id}
            {...task}
          />
        ))}

      </ul>
    </div>
  );
}

export default TaskList;