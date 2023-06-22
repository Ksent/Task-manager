import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { startSearch, endSearch } from '../../store/searchSlice';
import { addFilter } from '../../store/filterSlice';

function SearchForm() {
  const dispatch = useDispatch();
  const [value, setValue] = useState('');

  function sendValue(e) {
    e.preventDefault();

    dispatch(startSearch({ value }));
    dispatch(addFilter({ value: 'search' }));
  }

  function resetValue() {
    dispatch(endSearch());
    dispatch(addFilter({ value: 'all' }));

    setValue('');
  }

  function keyDown(e) {

    if (e.code === 'Backspace' || e.code === 'Delete') {
      resetValue();
    }

  }

  return (
    <li className="app-header__item search">
      <form 
        className="search__form"
        onSubmit={sendValue}
      >
        <button className="search__button">
          <svg 
            width="43"
            height="43"
            fill="transparent"
            stroke="#cfdfdf"
          >
            <use href="#icon-search"></use>
          </svg>
        </button>
        <label>
          <input 
            className="search__enter"
            type="text"
            name="enter-search"
            value={value}
            placeholder="Поиск"
            onChange={(e) => setValue(e.target.value)}
            onKeyDown={keyDown}
            required
          />
        </label>
        <button 
          className={"search__button search__delete-btn" + (value ? " active" : " hidden")}
          type="reset"
          onClick={resetValue}
        >
          <svg 
            width="20" 
            height="20" 
            stroke="#cfdfdf" 
            strokeWidth="2"
          >
            <use href="#icon-delete"></use>
          </svg>
        </button>
      </form>
    </li>
  );
}

export default SearchForm;