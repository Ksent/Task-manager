import React from 'react';

import PageNav from './PageNav';
import Counter from '../components/counter/Counter';

function Header() {
  return (
    <header className="page-header">
      <div className="page-header__wrapper">
        <PageNav
          className="page-header__list nav__list"
        />
        <Counter 
          className="page-header__counter counter"
        />
      </div>
    </header>
  );
}

export default Header;