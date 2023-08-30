import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { startSearch, endSearch, addFilter } from '../../store/taskSlice';
import { closeCalendar } from '../../store/calendarSlice';
import { IconSearch, IconDelete } from '../icons/Icons';

function SearchForm({ searchValue, setSearchValue }) {
  const dispatch = useDispatch();

  useEffect(() => {

    if(searchValue === '') {
      resetValue();
    }

  }, [searchValue]);

  function sendValue(e) {
    e.preventDefault();

    dispatch(closeCalendar());
    dispatch(startSearch({ searchValue }));
    dispatch(addFilter({ value: 'search' }));
  }

  function resetValue() {
    dispatch(endSearch());
    dispatch(addFilter({ value: 'all' }));

    setSearchValue('');
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
            value={searchValue}
            placeholder="Поиск"
            onChange={(e) => setSearchValue(e.target.value)}
            required
          />
        </label>
        {searchValue && 
          <button 
            className="search__button search__delete-btn"
            type="reset"
            onClick={resetValue}
          >
            <IconDelete 
              width="20" 
              height="20" 
              stroke="#cfdfdf" 
            />
          </button>
        }
      </form>
    </li>
  );
}

export default SearchForm;