import React from 'react';

function ModalInput({ subtitle, name, value, setValue, innerRef }) {
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
        required
        ref={innerRef}
      />
    </div>
  )
}

export default ModalInput;