import React from 'react';

function Button({ tagName, buttonClass, type, forName, handleClick, children }) {
  const TagName = `${tagName}`; 

  return (
    <TagName 
      className={buttonClass + " button"} 
      type={type}
      htmlFor={forName}
      onClick={handleClick}
    >
      {children}
    </TagName>
  );
}

export default Button;