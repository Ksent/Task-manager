import React from 'react';
import { Draggable } from 'react-beautiful-dnd';

import { useAppDispatch } from '../../hooks/hooks';
import { openModalWindow, getModalId } from '../../store/modalSlice';
import { toggleComplete, startEditing, deleteTask } from '../../store/taskSlice';
import { IconToggle, IconCheckmark, IconEdit, IconDelete } from '../icons/Icons';
import { ITask } from '../../types/task';

interface IIndexDnd extends ITask {
  index: number,
}

function TaskItem({ index, id, text, date, time, checked }: IIndexDnd) {
  const dispatch = useAppDispatch();
  const dateEnter = new Date(date).toLocaleDateString();

  function editedTask() {
    dispatch(openModalWindow());
    dispatch(getModalId({ id: 'edit' }));
    dispatch(startEditing(id));
  }

  return (
    <Draggable 
      draggableId={id.toString()} 
      index={index}
    >
      {(provided) => (
        <li 
          className="tasker__item"
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >

          <p className="tasker__inner tasker__inner-text">
            <input 
              className="tasker__toggle" 
              type="checkbox" 
              id={"toggle-task-" + id}
              checked={checked}
              onChange={() => dispatch(toggleComplete(id))}
            />
            <label 
              className="tasker__subtitle" 
              htmlFor={"toggle-task-" + id}
            >
              {text}
              <span className="tasker__datetime">
                {dateEnter} в {time}
              </span>
            </label>
            <IconToggle 
              className="tasker__toggle-icon" 
              width="16" 
              height="16" 
              fill="transparent" 
              stroke="#494a4b"
            />
            <IconCheckmark 
              className="tasker__checkmark-icon"
              width="22"
              height="22"
              stroke="#2de294"
            />
          </p>

          <p className="tasker__inner">
            <button 
              className="tasker__edit-btn"
              title="Редактировать"
              onClick={editedTask}
            >
              <IconEdit 
                width="18" 
                height="18" 
                fill="#c4c4c4"
              />
            </button>
            <button 
              className="tasker__delete-btn" 
              title="Удалить"
              onClick={() => dispatch(deleteTask(id))}
            >
              <IconDelete 
                width="20" 
                height="20" 
                stroke="#c4c4c4" 
              />
            </button>
          </p>

        </li>
      )}
    </Draggable>
  );
}

export default TaskItem;