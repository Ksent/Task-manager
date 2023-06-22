import React from 'react';

import Calendar from '../calendar/Calendar';
import SearchForm from './SearchForm';

function Search() {
  return (
    <ul className="app-header__list">
      <Calendar />
      <SearchForm />
    </ul>
  )
}

export default Search;