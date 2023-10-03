import React from 'react';
import format from 'date-fns/format';
import ru from 'date-fns/locale/ru';

import { IFilter } from '../../types/filter';
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHooks';

import { addFilter } from '../../store/taskSlice';

import Button from '../generic/Button';
import { IconAll, IconProcess, IconComplete, IconSearch, IconCalendar } from '../icons/Icons';

function FilterBtn({ id, forName, value, subtitle, initialValue }: IFilter) {
  const dispatch = useAppDispatch();
  const iconStyle = useAppSelector(state => state.filters.iconFilters);
  const calendarValue = useAppSelector(state => state.tasks.calendarValue);

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
        buttonLabel={subtitle}
        forName={forName}
      >

        {(id === 1) && 
          <IconAll {...iconStyle} />
        }

        {(id === 2) && 
          <IconProcess {...iconStyle} />
        }

        {(id === 3) && 
          <IconComplete {...iconStyle} />
        }

        {(id === 4) && 
          <IconSearch {...iconStyle} />
        }

        {(id === 5) && 
          <IconCalendar {...iconStyle} />
        }

        <span className="filter__subtitle button__subtitle">
          {(subtitle === 'Календарь') ? format(new Date(calendarValue), 'dd MMMM yyyy', {locale: ru}) : subtitle}
        </span>
      </Button>
      
    </li>
  );
}

export default FilterBtn;