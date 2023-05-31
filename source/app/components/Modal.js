import React from 'react';
import { useSelector } from 'react-redux';

import ModalForm from './ModalForm';

function Modal({ show, setShow, innerRef }) {
  const modalItems = useSelector(state => state.modalItems.modalItems);

  function closeModal() {
    setShow(false);
  }

  return (
    <div 
      className={"modal" + (show ? " modal--show" : "")}
      onClick={closeModal}
    >
      {modalItems.map(modalItem => (
        <ModalForm 
          key={modalItem.id}
          {...modalItem}
          closeModal={closeModal}
          innerRef={innerRef}
        />
      ))}
    </div>
  );
}

export default Modal;