import React, { forwardRef } from 'react';

import Button from '../generic/Button';
import { IconCalendar } from '../icons/Icons';

const CalendarButton = forwardRef(({ onClick, value }, ref) => (
  <Button 
    tagName="button"
    buttonClass="calendar__button"
    handleClick={onClick}
  >
    <IconCalendar 
      className="calendar__icon button__icon"
      width="46"
      height="46"
      stroke="#ddecec"
    />
    <span className="calendar__subtitle button__subtitle">
      {value}
    </span>
  </Button>
));

export default CalendarButton;