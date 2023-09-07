import React, { useState } from 'react';

import Calendar from '../components/calendar/Calendar';
import SearchForm from '../components/search/SearchForm';

function PageNav({ className }) {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <ul className={className}>
      <Calendar 
        className="nav__item calendar"
        setSearchQuery={setSearchQuery}
      />
      <SearchForm 
        className="nav__item search"
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />
    </ul>
  );
}

export default PageNav;