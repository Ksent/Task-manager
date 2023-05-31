import React from 'react';

import Calendar from './Calendar';
import SearchForm from './SearchForm';

function Search() {
  return (
    <ul className="header__list">
      <Calendar />
      <SearchForm />
    </ul>
  )
}

export default Search;