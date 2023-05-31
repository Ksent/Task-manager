import React from 'react';
import { Draggable } from 'react-beautiful-dnd';
import { useDispatch } from 'react-redux';

import { toggleComplete, deleteTask, editTask } from '../store/taskSlice';
import { openModalWindow } from '../store/modalSlice';

function TaskItem({ index, setShow, id, text, date, time, checked }) {
  const dispatch = useDispatch();
  const dateEnter = new Date(date).toLocaleDateString();

  function editedTask() {
    setShow(true);
    dispatch(openModalWindow({ id: 2 }))
    dispatch(editTask({ id }));
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
              onChange={() => dispatch(toggleComplete({ id }))}
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
            <svg 
              className="tasker__toggle-icon" 
              width="16" 
              height="16" 
              fill="transparent" 
              stroke="#494a4b"
            >
              <use href="#icon-toggle"></use>
            </svg>
            <svg 
              className="tasker__checkmark-icon"
              width="22"
              height="22"
              stroke="#2de294"
            >
              <use href="#icon-checkmark"></use>
            </svg>
          </p>

          <p className="tasker__inner">
            <button 
              className="tasker__edit-btn"
              title="Редактировать"
              onClick={editedTask}
            >
              <svg 
                width="18" 
                height="18" 
                fill="#c4c4c4"
              >
                <use href="#icon-edit"></use>
              </svg>
            </button>
            <button 
              className="tasker__delete-btn" 
              title="Удалить"
              onClick={() => dispatch(deleteTask({ id }))}
            >
              <svg 
                width="20" 
                height="20" 
                stroke="#c4c4c4" 
                strokeWidth="2"
              >
                <use href="#icon-delete"></use>
              </svg>
            </button>
          </p>

        </li>
      )}
    </Draggable>
  );
}

export default TaskItem;