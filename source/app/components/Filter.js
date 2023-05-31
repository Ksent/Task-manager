import React from 'react';
import { useSelector } from 'react-redux';

import FilterBtn from './FilterBtn';

function Nav() {
  const filters = useSelector(state => state.filters.filters);

  return (
    <ul className="main__filter filter__list">
      
      {filters.map(filter => (
        <FilterBtn 
          key={filter.id}
          {...filter}
        />
      ))}

    </ul>
  );
}

export default Nav;