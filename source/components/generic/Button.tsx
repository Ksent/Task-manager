import React, { ReactNode } from 'react';

interface IButton {
  tagName: string;
  buttonClass: string;
  buttonLabel?: string;
  buttonType?: "button" | "submit" | "reset";
  forName?: string;
  handleClick?: () => void;
  children: ReactNode;
}

function Button({ 
  tagName, 
  buttonClass, 
  buttonLabel,
  buttonType, 
  forName, 
  handleClick, 
  children 
}: IButton) {
  const TagName = `${tagName}` as "button" | "label" | "a"; 

  return (
    <TagName 
      className={buttonClass + " button"} 
      aria-label={buttonLabel}
      type={buttonType}
      htmlFor={forName}
      onClick={handleClick}
    >
      {children}
    </TagName>
  );
}

export default Button;