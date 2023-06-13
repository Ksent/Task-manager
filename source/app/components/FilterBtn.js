import React from 'react';
import { useDispatch } from 'react-redux';

import { addFilter } from '../store/filterSlice';

function FilterBtn({ id, forName, value, icon, subtitle, initialValue }) {
  const dispatch = useDispatch();

  return (
    <li 
      className="filter__item"
      key={id}
    >
      <input 
        className="filter__input"
        type="radio" 
        name="filter"
        id={forName}
        value={value}
        checked={(initialValue == value ? true : false)}
        onChange={() => dispatch(addFilter({ value }))}
      />
      <label 
        className="filter__button button" 
        htmlFor={forName}
      >
        <svg 
          className="filter__icon button__icon"
          width="46"
          height="46"
          fill="transparent"
          stroke="#c4c4c4"
        >
          <use href={icon}></use>
        </svg>
        <span className="filter__subtitle button__subtitle">
          {subtitle}
        </span>
      </label>
    </li>
  );
}

export default FilterBtn;