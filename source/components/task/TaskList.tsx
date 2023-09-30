import React, { ReactNode } from 'react';
import { DragDropContext, Droppable, DropResult } from 'react-beautiful-dnd';

import { IClassName } from '../../types/general';
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHooks';

import { dragEndTask } from '../../store/taskSlice';

import TaskItem from './TaskItem';
import TaskNotFound from './TaskNotFound';

function TaskList({ className }: IClassName) {
  const dispatch = useAppDispatch();
  const tasks = useAppSelector(state => state.tasks.tasksFilter);
  const searchValue = useAppSelector(state => state.tasks.searchValue);
  
  function showTasks(): ReactNode {

    if (searchValue !== '' && tasks.length === 0) {
      return <TaskNotFound />
    } else {
      return tasks.map((task, index) => (
        <TaskItem 
          key={task.id}
          index={index}
          {...task}
        />
      ));
    }
    
  }
  
  function dragEnd(result: DropResult): void {
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
              {showTasks()}
              {provided.placeholder}
            </ul>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
}

export default TaskList;