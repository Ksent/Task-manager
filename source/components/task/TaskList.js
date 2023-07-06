import React from 'react';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import { useDispatch, useSelector } from 'react-redux';

import { dragEndTask } from '../../store/taskSlice';
import TaskItem from './TaskItem';

function TaskList() {
  const dispatch = useDispatch();
  const tasks = useSelector(state => state.tasks.tasksFilter);

  function dragEnd(result) {
    if (!result.destination) return;

    dispatch(dragEndTask(result));
  }

  return (
    <div className="app-main__tasker tasker">
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