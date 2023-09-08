import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { closeModalWindow } from '../../store/modalSlice';
import { endEditing } from '../../store/taskSlice';
import ModalAdd from './ModalAdd';
import ModalEdit from './ModalEdit';

function Modal() {
  const dispatch = useDispatch();
  const modalShow = useSelector(state => state.modalWindow.modalShow);
  const modalItems = useSelector(state => state.modalWindow.modalItems);
  const modalWindowType = modalItems.find(modalItem => modalItem.id);

  function closeModal() {
    dispatch(closeModalWindow());

    if (modalWindowType.id === 'edit') {
      dispatch(endEditing());
    } else return;

  }

  return (
    <div 
      className={"modal" + ((modalShow === true) ? " modal--show" : "")}
      onClick={closeModal}
    >

      {(modalShow && modalWindowType.id === 'add') && 
        <ModalAdd 
          closeModal={closeModal}
        />
      }

      {(modalShow && modalWindowType.id === 'edit') && 
        <ModalEdit 
          closeModal={closeModal}
        />
      }
      
    </div>
  );
}

export default Modal;