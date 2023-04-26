import React from 'react';
import { useSelector } from 'react-redux';

import FilterBtn from './FilterBtn';

function Footer() {
  const filters = useSelector(state => state.filters.filters);

  return (
    <footer className="tasker__footer">
      <nav className="tasker__nav nav">

        <ul className="nav__list nav__list--display">
          
          {filters.map(filter => (
            <FilterBtn 
              key={filter.id}
              {...filter}
            />
          ))}

        </ul>

      </nav>
    </footer>
  );
}

export default Footer;