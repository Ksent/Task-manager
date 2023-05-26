import React from 'react';

import Calendar from './Calendar';
import SearchForm from './SearchForm';
import Nav from './Nav';

function Header({ setShow }) {
  return (
    <header className="tasker__header">

      <div className="tasker__search">
        <ul className="tasker__search-list">
          <Calendar />
          <SearchForm />
        </ul>
      </div>

      <nav className="tasker__nav nav">
        <Nav 
          setShow={setShow}
        />
      </nav>

    </header>

  );
}

export default Header;