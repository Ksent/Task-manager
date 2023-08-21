import React from 'react';
import { useSelector } from 'react-redux';

import FilterBtn from './FilterBtn';

function Filter({ startDate }) {
  const filters = useSelector(state => state.filters.filters);
  const initialValue = useSelector(state => state.tasks.filterValue);
  const searchValue = useSelector(state => state.tasks.searchValue);
  const calendarShow = useSelector(state => state.calendarItems.calendarShow);

  function searchOnOff() {

    if (searchValue !== '') {
      return filters.filter(filter => filter.id === 4);
    } else if (calendarShow === true) {
      return filters.filter(filter => filter.id === 5);
    } else {
      return filters.filter(filter => filter.id < 4);
    }

  }

  return (
    <ul className="app-main__filter filter__list">

      {searchOnOff().map(filter => (
        <FilterBtn 
          key={filter.id}
          initialValue={initialValue}
          startDate={startDate}
          {...filter}
        />
      ))}

    </ul>
  );
}

export default Filter;