import React from 'react';
import { DragDropContext, Droppable, DropResult } from 'react-beautiful-dnd';

import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { dragEndTask } from '../../store/taskSlice';
import TaskItem from './TaskItem';
import { IClassName } from '../../types/class';

function TaskList({ className }: IClassName) {
  const dispatch = useAppDispatch();
  const tasks = useAppSelector(state => state.tasks.tasksFilter);

  function dragEnd(result: DropResult) {
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