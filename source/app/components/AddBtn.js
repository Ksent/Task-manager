import React from 'react';
import { useDispatch } from 'react-redux';

import { openModalWindow, getModalId } from '../store/modalSlice';

function AddBtn() {
  const dispatch = useDispatch();

  function openModal() {
    dispatch(openModalWindow());
    dispatch(getModalId({ id: 'add' }));
  }

  return (
    <button 
      className="main__add-button button" 
      onClick={openModal}
    >
      <svg 
        className="main__add-icon button__icon"
        width="46" 
        height="46" 
        fill="#ffffff"
        >
        <g>
          <rect 
            x="21" 
            y="15" 
            width="4" 
            height="16"
            >
          </rect>
          <rect 
            x="15" 
            y="21" 
            width="16" 
            height="4"
            >
          </rect>
        </g>
      </svg>
      <span className="main__add-subtitle button__subtitle">
        Новая задача
      </span>
    </button>
  );
}

export default AddBtn;