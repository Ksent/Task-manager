import React from 'react';

function FilterBtn(props) {
  return (
    <li 
      className="nav__item"
      key={props.id}
    >
      <input 
        className="nav__input"
        type="radio" 
        name="filter"
        id={props.forName}
        value={props.value}
        defaultChecked={props.checked}
      />
      <label 
        className="nav__button button" 
        htmlFor={props.forName}
      >
        <svg 
          className="nav__icon button__icon"
          width="46"
          height="46"
          fill="transparent"
          stroke="#ddecec"
        >
          <use href={props.icon}></use>
        </svg>
        <span className="nav__subtitle button__subtitle">
          {props.subtitle}
        </span>
      </label>
    </li>
  );
}

export default FilterBtn;