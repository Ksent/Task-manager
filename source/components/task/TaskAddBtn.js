import React from 'react';
import { useDispatch } from 'react-redux';

import { openModalWindow, getModalId } from '../../store/modalSlice';
import Button from '../generic/Button';
import { IconAdd } from '../icons/Icons';

function TaskAddBtn({ className }) {
  const dispatch = useDispatch();

  function addNewTask() {
    dispatch(openModalWindow());
    dispatch(getModalId({ id: 'add' }));
  }

  return (
    <Button 
      tagName="button"
      buttonClass={className}
      handleClick={addNewTask}
    >
      <IconAdd 
        className="button__icon"
        width="46" 
        height="46" 
      />
      <span className="button__subtitle">
        Новая задача
      </span>
    </Button>
  )
}

export default TaskAddBtn;