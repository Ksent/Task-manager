import React from 'react';
import { useSelector } from 'react-redux';
import { IconAll, IconProcess, IconComplete, IconSearch } from '../icons/Icons';

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

  function addIcon(id) {

    if (id === 1) {
      return <IconAll 
        className="filter__icon button__icon"
        width="46" 
        height="46" 
        stroke="#c4c4c4"
      />;
    }

    if (id === 2) {
      return <IconProcess 
        className="filter__icon button__icon"
        width="46" 
        height="46" 
        stroke="#c4c4c4"
      />;
    }

    if (id === 3) {
      return <IconComplete 
        className="filter__icon button__icon"
        width="46" 
        height="46" 
        stroke="#c4c4c4"
      />;
    }

    if (id === 4) {
      return <IconSearch 
        className="filter__icon button__icon"
        width="46" 
        height="46" 
        stroke="#c4c4c4"
      />;
    }

  }

  return (
    <ul className="app-main__filter filter__list">

      {searchOnOff().map(filter => (
        <FilterBtn 
          key={filter.id}
          initialValue={initialValue}
          icon={addIcon(filter.id)}
          {...filter}
        />
      ))}

    </ul>
  );
}

export default Filter;