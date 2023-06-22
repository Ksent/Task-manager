import React from 'react';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import { useDispatch, useSelector } from 'react-redux';

import { dragEndTask } from '../store/taskSlice';
import TaskItem from './TaskItem';

function TaskList() {
  const dispatch = useDispatch();
  const tasks = useSelector(state => state.tasks.tasks);
  const filterValue = useSelector(state => state.filters.filterValue);
  const searchValue = useSelector(state => state.searchForm.searchValue);

  function filteredTasks() {

    switch(filterValue) {
      case 'all':
        return tasks;
      case 'process':
        return tasks.filter(task => task.checked === false);
      case 'complete':
        return tasks.filter(task => task.checked === true);
      case 'search':

        if (searchValue !== '') {
          return tasks.filter(task => task.text.toLowerCase().includes(searchValue.toLowerCase()));
        } else return [];

    }

  }

  function dragEnd(result) {
    if (!result.destination) return;

    dispatch(dragEndTask(result));
  }

  return (
    <div className="main__tasker tasker">
      <DragDropContext onDragEnd={dragEnd}>
        <Droppable droppableId="list">
          {(provided) => (
            <ul 
              className="tasker__list"
              ref={provided.innerRef}
              {...provided.droppableProps}
            >

              {filteredTasks().map((task, index) => (
                <TaskItem 
                  key={task.id}
                  {...task}
                  index={index}
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