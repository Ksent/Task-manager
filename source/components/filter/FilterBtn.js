import React from 'react';
import { useDispatch } from 'react-redux';

import { addFilter } from '../../store/taskSlice';
import Button from '../generic/Button';

function FilterBtn({ forName, value, initialValue, icon, subtitle }) {
  const dispatch = useDispatch();

  return (
    <li 
      className="filter__item"
    >
      <input 
        className="filter__input"
        type="radio" 
        name="filter"
        id={forName}
        value={value}
        checked={(initialValue === value ? true : false)}
        onChange={() => dispatch(addFilter({ value }))}
      />

      <Button 
        tagName="label"
        buttonClass="filter__button"
        forName={forName}
      >
        {icon}
        <span className="filter__subtitle button__subtitle">
          {subtitle}
        </span>
      </Button>
      
    </li>
  );
}

export default FilterBtn;