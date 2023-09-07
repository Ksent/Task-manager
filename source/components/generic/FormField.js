import React from 'react';

function FormField({ 
  labelClass, 
  children, 
  inputClass, 
  type, 
  name, 
  value, 
  handleChange, 
  placeholder, 
  autoFocus, 
  required 
}) 
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