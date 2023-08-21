import React from 'react';
import { useDispatch } from 'react-redux';

import { startSearch, endSearch, addFilter } from '../../store/taskSlice';
import { closeCalendar } from '../../store/calendarSlice';
import { IconSearch, IconDelete } from '../icons/Icons';

function SearchForm({ value, setValue }) {
  const dispatch = useDispatch();

  function sendValue(e) {
    e.preventDefault();

    dispatch(closeCalendar());
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
          <IconSearch
            width="43"
            height="43"
            stroke="#cfdfdf"
          />
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
          <IconDelete 
            width="20" 
            height="20" 
            stroke="#cfdfdf" 
          />
        </button>
      </form>
    </li>
  );
}

export default SearchForm;