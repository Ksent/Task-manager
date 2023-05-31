import React, { useState } from 'react';

function SearchForm() {
  const [value, setValue] = useState('');

  function resetValue() {
    setValue('');
  }

  return (
    <li className="header__item search">
      <form className="search__form">
        <button 
          className="search__button"
        >
          <svg 
            width="43"
            height="43"
            fill="transparent"
            stroke="#cfdfdf"
          >
            <use href="#icon-search"></use>
          </svg>
        </button>
        <label>
          <input 
            className="search__enter"
            type="text"
            name="enter-search"
            value={value}
            placeholder="Поиск"
            onChange={(e) => setValue(e.target.value)}
            required
          />
        </label>
        <button 
          className={"search__button search__delete-btn" + (value ? " active" : " hidden")}
          type="reset"
          onClick={resetValue}
        >
          <svg 
            width="20" 
            height="20" 
            stroke="#cfdfdf" 
            strokeWidth="2"
          >
            <use href="#icon-delete"></use>
          </svg>
        </button>
      </form>
    </li>
  );
}

export default SearchForm;