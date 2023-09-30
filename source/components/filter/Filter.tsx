import React from 'react';

import { IClassName } from '../../types/general';
import { IFilter } from '../../types/filter';
import { useAppSelector } from '../../hooks/reduxHooks';

import FilterBtn from './FilterBtn';

function Filter({ className }: IClassName) {
  const filters = useAppSelector(state => state.filters.filters);
  const initialValue = useAppSelector(state => state.tasks.filterValue);
  const searchValue = useAppSelector(state => state.tasks.searchValue);
  const calendarShow = useAppSelector(state => state.calendarItems.calendarShow);

  function searchOnOff(): IFilter[] {

    if (searchValue !== '') {
      return filters.filter(filter => filter.id === 4);
    } else if (calendarShow === true) {
      return filters.filter(filter => filter.id === 5);
    } else {
      return filters.filter(filter => filter.id < 4);
    }

  }

  return (
    <ul className={className + " filter__list"}>

      {searchOnOff().map(filter => (
        <FilterBtn 
          key={filter.id}
          initialValue={initialValue}
          {...filter}
        />
      ))}

    </ul>
  );
}

export default Filter;