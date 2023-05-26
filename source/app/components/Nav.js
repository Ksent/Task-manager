import React from 'react';
import { useSelector } from 'react-redux';

import FilterBtn from './FilterBtn';
import AddBtn from './AddBtn';

function Nav({ setShow }) {
  const filters = useSelector(state => state.filters.filters);

  return (
    <ul className="nav__list">
      
      {filters.map(filter => (
        <FilterBtn 
          key={filter.id}
          {...filter}
        />
      ))}

      <AddBtn 
        setShow={setShow}
      />

    </ul>
  );
}

export default Nav;