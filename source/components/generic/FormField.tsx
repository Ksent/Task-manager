import React, { ChangeEvent, ReactNode } from 'react';

interface IFormField {
  labelClass?: string, 
  children?: ReactNode, 
  inputClass: string, 
  type: string, 
  name: string, 
  value: string, 
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void, 
  placeholder?: string, 
  required: boolean, 
  autoFocus?: boolean, 
}

function FormField({ 
  labelClass, 
  children, 
  inputClass, 
  type, 
  name, 
  value, 
  handleChange, 
  placeholder, 
  required, 
  autoFocus 
}: IFormField) 
{
  return (
    <label className={labelClass}>
      {children}
      <input
        className={inputClass}
        type={type}
        name={name}
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        required={required}
        autoFocus={autoFocus}
      />
    </label>
  );
}

export default FormField;