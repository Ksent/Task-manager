import React from 'react';

import { useAppDispatch, useAppSelector } from '../../hooks/reduxHooks';

import { closeModalWindow } from '../../store/modalSlice';
import { endEditing } from '../../store/taskSlice';

import ModalAdd from './ModalAdd';
import ModalEdit from './ModalEdit';

function Modal() {
  const dispatch = useAppDispatch();
  const modalShow = useAppSelector(state => state.modalWindow.modalShow);
  const modalItems = useAppSelector(state => state.modalWindow.modalItems);
  const modalWindowType = modalItems.find(modalItem => modalItem.id);

  function closeModal(): void {
    dispatch(closeModalWindow());

    if (modalWindowType && modalWindowType.id === 'edit') {
      dispatch(endEditing());
    } else return;

  }

  return (
    <div 
      className={"modal" + ((modalShow === true) ? " modal--show" : "")}
      onClick={closeModal}
    >

      {(modalShow && modalWindowType && modalWindowType.id === 'add') && 
        <ModalAdd 
          closeModal={closeModal}
        />
      }

      {(modalShow && modalWindowType && modalWindowType.id === 'edit') && 
        <ModalEdit 
          closeModal={closeModal}
        />
      }
      
    </div>
  );
}

export default Modal;