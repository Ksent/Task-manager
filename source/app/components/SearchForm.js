import React, { useState } from 'react';

function SearchForm() {
  const [value, setValue] = useState('');

  function resetValue() {
    setValue('');
  }

  return (
    <li className="tasker__search-item search">
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
        <label htmlFor="enter-search">
        </label>
        <input 
          className="search__enter"
          type="text"
          name="enter-search"
          id="enter-search"
          value={value}
          placeholder="Поиск"
          onChange={(e) => setValue(e.target.value)}
          required
        />
        <button 
          className={"search__button search__button-delete" + (value ? " active" : " hidden")}
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