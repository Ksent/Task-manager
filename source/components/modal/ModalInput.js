import React from 'react';

function ModalInput({ subtitle, name, value, setValue, autoFocus }) {
  return (
    <div className="modal__form-inner">
      <label 
        className="modal__subtitle"
        htmlFor={name}
      >
        {subtitle}
      </label>
      <input
        className="modal__enter"
        type={name}
        name={name}
        id={name}
        value={value}
        onChange={setValue}
        autoFocus={autoFocus}
        required
      />
    </div>
  )
}

export default ModalInput;