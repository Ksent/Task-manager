import React, { FormEvent, useEffect } from 'react';

import { ISearchState } from '../../types/search';
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHooks';

import { closeCalendar } from '../../store/calendarSlice';
import { startSearch, endSearch, addFilter } from '../../store/taskSlice';

import { IconSearch, IconDelete } from '../icons/Icons';
import FormField from '../generic/FormField';

function SearchForm({ className, searchQuery, setSearchQuery }: ISearchState) {
  const dispatch = useAppDispatch();
  const searchValue = useAppSelector(state => state.tasks.searchValue);

  useEffect(() => {

    if (searchQuery === '') {
      resetValue();
    }

  }, [searchQuery]);

  function sendValue(e: FormEvent): void {
    e.preventDefault();

    dispatch(closeCalendar());
    dispatch(startSearch(searchQuery));
    dispatch(addFilter({ value: 'search' }));
  }

  function resetValue(): void {
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
        autoComplete="off"
      >
        <button 
          className="search__button"
          aria-label="Начать поиск"
        >
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
          aria-label="Очистить поиск"
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