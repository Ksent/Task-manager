import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { format } from 'date-fns';
import ru from 'date-fns/locale/ru';

import { addFilter } from '../../store/taskSlice';
import Button from '../generic/Button';
import { IconAll, IconProcess, IconComplete, IconSearch, IconCalendar } from '../icons/Icons';

function FilterBtn({ id, forName, value, initialValue, subtitle, startDate }) {
  const dispatch = useDispatch();
  const iconStyle = useSelector(state => state.filters.iconFilters);

  function addIcon() {

    if (id === 1) {
      return <IconAll {...iconStyle} />;
    }

    if (id === 2) {
      return <IconProcess {...iconStyle} />;
    }

    if (id === 3) {
      return <IconComplete {...iconStyle} />;
    }

    if (id === 4) {
      return <IconSearch {...iconStyle} />;
    }

    if (id === 5) {
      return <IconCalendar {...iconStyle} />;
    }

  }

  return (
    <li 
      className="filter__item"
    >
      <input 
        className="filter__input"
        type="radio" 
        name="filter"
        id={forName}
        value={value}
        checked={(initialValue === value ? true : false)}
        onChange={() => dispatch(addFilter({ value }))}
      />

      <Button 
        tagName="label"
        buttonClass="filter__button"
        forName={forName}
      >
        {addIcon()}
        <span className="filter__subtitle button__subtitle">
          {(!subtitle && value === 'calendar') ? format(startDate, 'dd MMMM yyyy', {locale: ru}) : subtitle}
        </span>
      </Button>
      
    </li>
  );
}

export default FilterBtn;