import React from 'react';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import { useDispatch, useSelector } from 'react-redux';

import { dragEndTask } from '../../store/taskSlice';
import TaskItem from './TaskItem';

function TaskList() {
  const dispatch = useDispatch();
  const tasks = useSelector(state => state.tasks.tasks);
  const searchValue = useSelector(state => state.searchForm.searchValue);
  
  function filteredTasks() {
    
    if (searchValue !== '') {
      const searchTasks = tasks.filter(task => task.text.toLowerCase().includes(searchValue.toLowerCase()));

      return searchTasks;
    } else return tasks;
    
  }

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

              {filteredTasks().map((task, index) => {
                if (task.filtered === false) {
                  return null;
                }

                return <TaskItem 
                  key={task.id}
                  {...task}
                  index={index}
                />;
              })}

              {provided.placeholder}
            </ul>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
}

export default TaskList;