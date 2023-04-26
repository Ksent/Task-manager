import React from 'react';

function AddBtn({ setShow }) {
  return (
    <li className="nav__item nav__item--position">
      <button 
        className="nav__add-button button-add" 
        title="Добавить"
        onClick={() => setShow(true)}
        >
        <svg 
          width="46" 
          height="46" 
          fill="#7dc4a3"
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
      </button>
    </li>
  );
}

export default AddBtn;