import React from 'react';

import Search from './Search';
import Counter from './Counter';

function Header() {
  return (
    <header className="header">
      <div className="header__wrapper">
        <Search />
        <Counter />
      </div>
    </header>
  );
}

export default Header;