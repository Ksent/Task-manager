import React from 'react';
import { useSelector } from 'react-redux';

import FilterBtn from './FilterBtn';

function Filter() {
  const filters = useSelector(state => state.filters.filters);
  const initialValue = useSelector(state => state.tasks.filterValue);
  const searchValue = useSelector(state => state.tasks.searchValue);

  function searchOnOff() {

    if (searchValue !== '') {
      return filters.filter(filter => filter.id === 4);
    } else {
      return filters.filter(filter => filter.id !== 4);
    }

  }

  return (
    <ul className="app-main__filter filter__list">

      {searchOnOff().map(filter => (
        <FilterBtn 
          key={filter.id}
          {...filter}
          initialValue={initialValue}
        />
      ))}

    </ul>
  );
}

export default Filter;