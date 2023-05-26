import React from 'react';

function AddBtn({ setShow }) {
  return (
    <li className="nav__item">
      <button 
        className="nav__button button button-add" 
        onClick={() => setShow(true)}
        >
        <svg 
          className="nav__icon button__icon"
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
        <span className="nav__subtitle button__subtitle">
          Новая задача
        </span>
      </button>
    </li>
  );
}

export default AddBtn;