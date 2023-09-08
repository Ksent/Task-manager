import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { editTask } from '../../store/taskSlice';
import FormField from '../generic/FormField';
import ModalBtns from './ModalBtns';

function ModalForm({ closeModal }) {
  const dispatch = useDispatch();
  const tasks = useSelector(state => state.tasks.tasks);
  const editedTask = tasks.find(task => task.edited === true);
  const [text, setText] = useState(editedTask.text);
  const [date, setDate] = useState(editedTask.date);
  const [time, setTime] = useState(editedTask.time);

  function resetTask() {
    closeModal();

    setText('');
    setDate('');
    setTime('');
  }

  function sendTask(e) {
    e.preventDefault();

    dispatch(editTask({ text, date, time }));
    resetTask();
  }

  return (
    <div 
      className="modal__wrapper"
      onClick={(e) => e.stopPropagation()}
    >
      <h1 className="modal__title">Редактировать задачу</h1>

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

export default ModalForm;