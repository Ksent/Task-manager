import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { openModalWindow, closeModalWindow } from '../../store/modalSlice';
import { endEditing } from '../../store/taskSlice';
import ModalAdd from './ModalAdd';
import ModalEdit from './ModalEdit';

function Modal() {
  const dispatch = useDispatch();
  const modalItems = useSelector(state => state.modalWindow.modalItems);
  const modalWindowType = modalItems.find(modalItem => modalItem.id);
  const innerRef = useRef();
  useEffect(() => innerRef.current && innerRef.current.focus());

  function closeModal() {
    dispatch(closeModalWindow());

    if (modalWindowType.id === 'edit') {
      dispatch(endEditing());
    } else return;

  }

  return (
    <div 
      className={"app-modal modal" + ((() => dispatch(openModalWindow())) ? " modal--show" : "")}
      onClick={closeModal}
    >

      {(modalWindowType.id === 'add') && 
        <ModalAdd 
          closeModal={closeModal}
        />
      }

      {(modalWindowType.id === 'edit') && 
        <ModalEdit 
          closeModal={closeModal}
        />
      }
      
    </div>
  );
}

export default Modal;