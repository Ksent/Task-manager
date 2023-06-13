import React from 'react';
import { useSelector } from 'react-redux';

import FilterBtn from './FilterBtn';

function Nav() {
  const filters = useSelector(state => state.filters.filters);
  const initialValue = useSelector(state => state.filters.filterValue);

  return (
    <ul className="main__filter filter__list">
      
      {filters.map(filter => (
        <FilterBtn 
          key={filter.id}
          {...filter}
          initialValue={initialValue}
        />
      ))}

    </ul>
  );
}

export default Nav;