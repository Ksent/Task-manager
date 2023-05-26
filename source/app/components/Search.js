import React from 'react';

import Calendar from './Calendar';
import SearchForm from './SearchForm';

function Search() {
  return (
    <ul className="search__list">
      <Calendar />
      <SearchForm />
    </ul>
  )
}

export default Search;