import React, { useState } from 'react';

import Calendar from '../components/calendar/Calendar';
import SearchForm from '../components/search/SearchForm';
import { IClassName } from '../types/class';

function PageNav({ className }: IClassName) {
  const [searchQuery, setSearchQuery] = useState<string>('');

  return (
    <ul className={className + " nav__list"}>
      <Calendar 
        className="nav__item"
        setSearchQuery={setSearchQuery}
      />
      <SearchForm 
        className="nav__item"
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />
    </ul>
  );
}

export default PageNav;