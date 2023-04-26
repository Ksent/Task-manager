import React from 'react';

import { useDispatch } from 'react-redux';
import {toggleComplete, deleteTask} from '../store/taskSlice';

function TaskItem({ id, text, checked }) {
  const dispatch = useDispatch();

  return (
    <li 
      className="tasker__task-item" 
      draggable="true"
    >

      <p className="tasker__task-text">
        <input 
          className="tasker__toggle" 
          type="checkbox" 
          id="toggle-task"
          checked={checked}
          onChange={() => dispatch(toggleComplete({ id }))}
        />
        <label 
          className="tasker__subtitle" 
          htmlFor="toggle-task"
        >
          {text}
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
          stroke="#8fdab7"
        >
          <use href="#icon-checkmark"></use>
        </svg>
      </p>

      <p className="tasker__task-icons">
        <button 
          className="tasker__edit-btn"
          title="Редактировать"
        >
          <svg 
            width="18" 
            height="18" 
            fill="#c9cbcc"
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
            stroke="#c9cbcc" 
            strokeWidth="2"
          >
            <use href="#icon-delete"></use>
          </svg>
        </button>
      </p>

    </li>
  );
}

export default TaskItem;