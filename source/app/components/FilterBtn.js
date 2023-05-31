import React from 'react';

function FilterBtn(props) {
  return (
    <li 
      className="filter__item"
      key={props.id}
    >
      <input 
        className="filter__input"
        type="radio" 
        name="filter"
        id={props.forName}
        value={props.value}
        defaultChecked={props.checked}
      />
      <label 
        className="filter__button button" 
        htmlFor={props.forName}
      >
        <svg 
          className="filter__icon button__icon"
          width="46"
          height="46"
          fill="transparent"
          stroke="#c4c4c4"
        >
          <use href={props.icon}></use>
        </svg>
        <span className="filter__subtitle button__subtitle">
          {props.subtitle}
        </span>
      </label>
    </li>
  );
}

export default FilterBtn;