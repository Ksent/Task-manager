import React from 'react';

import ModalForm from './ModalForm';

function Modal({ show, setShow }) {

  function closeModal() {
    setShow(false);
  }

  return (
    <div 
      className={"tasker__modal modal" + (show ? " modal--show" : "")}
      onClick={closeModal}
    >

      {/* <ModalForm 
        show={show}
        setShow={setShow}
        closeModal={closeModal}
        title="Редактировать задачу"
      /> */}
      <ModalForm 
        // show={show}
        // setShow={setShow}
        closeModal={closeModal}
        title="Добавить задачу"
      />
    </div>
  );
}

export default Modal;