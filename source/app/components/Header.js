import React from 'react';

import Calendar from './Calendar';
import SearchForm from './SearchForm';
import AddBtn from './AddBtn';

function Header({ setShow }) {
  return (
    <header className="tasker__header">
      <nav className="tasker__nav nav">

        <ul className="nav__list">
          <Calendar />
          <SearchForm />
          <AddBtn 
            setShow={setShow}
          />
        </ul>
      </nav>

    </header>

  );
}

export default Header;