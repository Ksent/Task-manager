import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { startSearch, endSearch, addFilter } from '../../store/taskSlice';
import { closeCalendar } from '../../store/calendarSlice';
import FormField from '../generic/FormField';
import { IconSearch, IconDelete } from '../icons/Icons';

function SearchForm({ className, searchQuery, setSearchQuery }) {
  const dispatch = useDispatch();
  const searchValue = useSelector(state => state.tasks.searchValue);

  useEffect(() => {

    if (searchQuery === '') {
      resetValue();
    }

  }, [searchQuery]);

  function sendValue(e) {
    e.preventDefault();

    dispatch(closeCalendar());
    dispatch(startSearch({ searchQuery }));
    dispatch(addFilter({ value: 'search' }));
  }

  function resetValue() {
    dispatch(endSearch());

    if (searchValue !== '') {
      dispatch(addFilter({ value: 'all' }));
    }

    setSearchQuery('');
  }

  return (
    <li className={className + " search"}>
      <form 
        className="search__form"
        onSubmit={sendValue}
      >
        <button className="search__button">
          <IconSearch
            width="43"
            height="43"
            stroke="#c8d8d8"
          />
        </button>

        <FormField 
          inputClass="search__enter"
          type="text"
          name="enter-search"
          value={searchQuery}
          handleChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Поиск"
          required
        />
        
        <button 
          className={"search__button search__delete-btn" + (searchQuery ? " search__delete-btn--show" : "")}
          type="reset"
          onClick={resetValue}
        >
          <IconDelete 
            width="20" 
            height="20" 
            stroke="#c8d8d8" 
          />
        </button>
      </form>
    </li>
  );
}

export default SearchForm;