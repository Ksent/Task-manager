import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';

import { dragEndTask } from '../../store/taskSlice';
import TaskItem from './TaskItem';

function TaskList({ className }) {
  const dispatch = useDispatch();
  const tasks = useSelector(state => state.tasks.tasksFilter);

  function dragEnd(result) {
    if (!result.destination) return;

    dispatch(dragEndTask(result));
  }

  return (
    <div className={className + " tasker"}>
      <DragDropContext onDragEnd={dragEnd}>
        <Droppable droppableId="list">
          {(provided) => (
            <ul 
              className="tasker__list"
              ref={provided.innerRef}
              {...provided.droppableProps}
            >

              {tasks.map((task, index) => (
                <TaskItem 
                  key={task.id}
                  index={index}
                  {...task}
                />
              ))}

              {provided.placeholder}
            </ul>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
}

export default TaskList;