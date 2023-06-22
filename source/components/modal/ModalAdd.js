import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { addNewTask } from '../../store/taskSlice';
import ModalInput from './ModalInput';
import ModalBtns from './ModalBtns';

function ModalAdd({ innerRef, closeModal }) {
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
        <ModalInput 
          subtitle="Задача"
          name="text"
          value={text}
          setValue={(e) => setText(e.target.value)}
          innerRef={innerRef}
        />

        <ModalInput 
          subtitle="Дата"
          name="date"
          value={date}
          setValue={(e) => setDate(e.target.value)}
        />

        <ModalInput 
          subtitle="Время"
          name="time"
          value={time}
          setValue={(e) => setTime(e.target.value)}
        />

        <ModalBtns 
          resetTask={resetTask}
        />
      </form>

    </div>
  );
}

export default ModalAdd;