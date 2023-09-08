import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { addNewTask } from '../../store/taskSlice';
import FormField from '../generic/FormField';
import ModalBtns from './ModalBtns';

function ModalAdd({ closeModal }) {
  const dispatch = useDispatch();
  const [text, setText] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  function resetTask() {
    closeModal();

    setText('');
    setDate('');
    setTime('');
  }

  function sendTask(e) {
    e.preventDefault();

    dispatch(addNewTask({ text, date, time }));
    resetTask();
  }

  return (
    <div 
      className="modal__wrapper"
      onClick={(e) => e.stopPropagation()}
    >
      <h1 className="modal__title">Добавить задачу</h1>

      <form 
        className="modal__form"
        onSubmit={sendTask}
      >
        
        <FormField
          labelClass="modal__form-inner"
          inputClass="modal__enter"
          type="text"
          name="text"
          value={text}
          handleChange={(e) => setText(e.target.value)}
          required
          autoFocus
        >
          <span className="modal__subtitle">Задача</span>
        </FormField> 

        <FormField
          labelClass="modal__form-inner"
          inputClass="modal__enter"
          type="date"
          name="date"
          value={date}
          handleChange={(e) => setDate(e.target.value)}
          required
        >
          <span className="modal__subtitle">Дата</span>
        </FormField> 

        <FormField
          labelClass="modal__form-inner"
          inputClass="modal__enter"
          type="time"
          name="time"
          value={time}
          handleChange={(e) => setTime(e.target.value)}
          required
        >
          <span className="modal__subtitle">Время</span>
        </FormField> 

        <ModalBtns 
          resetTask={resetTask}
        />
      </form>

    </div>
  );
}

export default ModalAdd;