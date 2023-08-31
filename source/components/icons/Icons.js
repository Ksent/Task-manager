import React from 'react';

const IconCalendar = ({ className, width, height, stroke }) => (
  <svg 
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    width={width} 
    height={height} 
    viewBox="0 0 46 46" 
    id="icon-calendar"
    fill="transparent"
    stroke={stroke}
  >
    <g>
      <line strokeWidth="2" strokeLinecap="round" x1="19" x2="19" y1="13" y2="17"></line>
      <line strokeWidth="2" strokeLinecap="round" x1="27" x2="27" y1="13" y2="17"></line>
      <rect strokeWidth="2" x="15" y="15" rx="3" width="16" height="16"></rect>
      <line strokeWidth="2" strokeLinecap="round" x1="15" x2="30" y1="20" y2="20"></line>
      <rect strokeWidth="1" fill="#ddecec" x="19.5" y="23.5" rx="0.1" width="1" height="1"></rect>
      <rect strokeWidth="1" fill="#ddecec" x="22.5" y="23.5" rx="0.1" width="1" height="1"></rect>
      <rect strokeWidth="1" fill="#ddecec" x="25.5" y="23.5" rx="0.1" width="1" height="1"></rect>
      <rect strokeWidth="1" fill="#ddecec" x="19.5" y="26.5" rx="0.1" width="1" height="1"></rect>
      <rect strokeWidth="1" fill="#ddecec" x="22.5" y="26.5" rx="0.1" width="1" height="1"></rect>
      <rect strokeWidth="1" fill="#ddecec" x="25.5" y="26.5" rx="0.1" width="1" height="1"></rect>
    </g>
  </svg>
);

const IconSearch = ({ className, width, height, stroke }) => (
  <svg 
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    width={width} 
    height={height}
    viewBox="0 0 46 46" 
    id="icon-search"
    fill="transparent"
    stroke={stroke}
  >
    <g>
      <circle r="7" cx="22" cy="21" strokeWidth="2"></circle>
      <line strokeWidth="3" strokeLinecap="round" x1="27" x2="31" y1="27" y2="32"></line>
    </g>
  </svg>
);

const IconAll = ({ className, width, height, stroke }) => (
  <svg 
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    width={width} 
    height={height}
    viewBox="0 0 46 46" 
    id="icon-all"
    fill="transparent"
    stroke={stroke}
  >
    <g>
      <line strokeWidth="2" strokeLinecap="round" x1="15" x2="30" y1="17" y2="17"></line>
      <line strokeWidth="2" strokeLinecap="round" x1="15" x2="24" y1="23" y2="23"></line> 
      <line strokeWidth="2" strokeLinecap="round" x1="15" x2="30" y1="29" y2="29"></line>
    </g>
  </svg>
);

const IconProcess = ({ className, width, height, stroke }) => (
  <svg 
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    width={width} 
    height={height}
    viewBox="0 0 46 46" 
    id="icon-process"
    fill="transparent"
    stroke={stroke}
  >
    <g>
      <circle r="8" cx="24" cy="23" strokeWidth="2"></circle>
      <line strokeWidth="2" strokeLinecap="round" x1="26" x2="24" y1="20" y2="25"></line>
      <line strokeWidth="2" strokeLinecap="round" x1="24" x2="20" y1="25" y2="25"></line>
    </g>
  </svg>
);

const IconComplete = ({ className, width, height, stroke }) => (
  <svg 
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    width={width} 
    height={height}
    viewBox="0 0 46 46" 
    id="icon-complete"
    fill="transparent"
    stroke={stroke}
  >
    <g>
      <line strokeWidth="3" strokeLinecap="round" x1="16" x2="21" y1="22" y2="29"></line>
      <line strokeWidth="3" strokeLinecap="round" x1="21" x2="32" y1="29" y2="14"></line>
    </g>
  </svg>
);

const IconAdd = ({ className, width, height }) => (
  <svg 
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    width={width} 
    height={height}
    viewBox="0 0 46 46" 
    id="icon-add"
    fill="#ffffff"
  >
    <g>
      <rect x="21" y="15" width="4" height="16"></rect>
      <rect x="15" y="21" width="16" height="4"></rect>
    </g>
  </svg>
);

const IconToggle = ({ className, width, height, fill, stroke }) => (
  <svg 
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    width={width} 
    height={height}
    viewBox="0 0 20 20" 
    id="icon-toggle"
    fill={fill}
    stroke={stroke}
  >
    <rect x="2" y="2" rx="2" width="16" height="16"></rect>
  </svg>
);

const IconCheckmark = ({ className, width, height, stroke }) => (
  <svg 
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    width={width} 
    height={height}
    viewBox="0 0 22 22" 
    id="icon-checkmark"
    stroke={stroke}
  >
    <g>
      <line strokeWidth="3" strokeLinecap="round" x1="5" x2="8" y1="9" y2="14"></line>
      <line strokeWidth="2" strokeLinecap="round" x1="8" x2="17" y1="15" y2="1"></line>
    </g>
  </svg>
);

const IconEdit = ({ width, height, fill }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg"
    width={width} 
    height={height}
    viewBox="0 0 46 46" 
    id="icon-edit"
    fill={fill}
  >
    <g>
      <rect x="29" y="-22" width="10" height="8" rx="2" transform="rotate(45)"></rect>
      <rect x="29" y="-12" width="10" height="27" rx="2" transform="rotate(45)"></rect>
      <polygon points="5 43, 15 39, 9 33"></polygon>
    </g>
  </svg>
);

const IconDelete = ({ width, height, stroke }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg"
    width={width} 
    height={height}
    viewBox="0 0 16 16" 
    id="icon-delete"
    stroke={stroke}
  >
    <g>
      <line strokeWidth="2" x1="4" x2="12" y1="4" y2="12"></line>
      <line strokeWidth="2" x1="4" x2="12" y1="12" y2="4"></line>
    </g>
  </svg>
);

export {
  IconCalendar,
  IconSearch,
  IconAll,
  IconProcess,
  IconComplete,
  IconAdd,
  IconToggle,
  IconCheckmark,
  IconEdit,
  IconDelete,
};
