import React from 'react';

function SearchForm() {
  return (
    <li className="nav__item search">
      <form className="search__form">
        <button 
          className="search__button"
        >
          <svg 
            className="search__icon"
            width="46"
            height="46"
            fill="transparent"
            stroke="#ddecec"
          >
            <use href="#icon-search"></use>
          </svg>
        </button>
        <label htmlFor="enter-search">
        </label>
        <input 
          className="search__enter"
          type="search"
          name="enter-search"
          id="enter-search"
          placeholder="Поиск"
          required
        />
      </form>
    </li>
  );
}

export default SearchForm;