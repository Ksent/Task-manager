import React from 'react';
import format from 'date-fns/format';
import ru from 'date-fns/locale/ru';

import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { addFilter } from '../../store/taskSlice';
import Button from '../generic/Button';
import { IconAll, IconProcess, IconComplete, IconSearch, IconCalendar } from '../icons/Icons';
import { IFilter } from '../../types/filter';

interface IInitialValue extends IFilter {
  initialValue: string,
}

function FilterBtn({ id, forName, value, subtitle, initialValue }: IInitialValue) {
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
          {(!subtitle && value === 'calendar') ? format(new Date(calendarValue), 'dd MMMM yyyy', {locale: ru}) : subtitle}
        </span>
      </Button>
      
    </li>
  );
}

export default FilterBtn;