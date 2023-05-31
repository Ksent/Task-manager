import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { addNewTask, editTask } from '../store/taskSlice';

function ModalForm({ title, innerRef, closeModal }) {
  const [text, setText] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const dispatch = useDispatch();

  function resetTask() {
    closeModal();
    setText('');
    setDate('');
    setTime('');
  }

  function sendTask(e) {
    e.preventDefault();
    dispatch(editTask({ text, date, time }));
    // dispatch(addNewTask({ text, date, time }));
    resetTask();
  }

  return (
    <div 
      className="modal__wrapper"
      onClick={(e) => e.stopPropagation()}
    >
      <h1 className="modal__title">{title}</h1>

      <form 
        className="modal__form"
        onSubmit={sendTask}
      >

      <div className="modal__form-inner">
        <label 
          className="modal__subtitle"
          htmlFor="text"
        >
          Задача
        </label>
        <input
          className="modal__enter"
          type="text"
          name="text"
          id="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          required
          ref={innerRef}
        />
      </div>

      <div className="modal__form-inner">
        <label 
          className="modal__subtitle"
          htmlFor="date"
        >
          Дата
        </label>
        <input
          className="modal__enter"
          type="date"
          name="date"
          id="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />
      </div>

      <div className="modal__form-inner">
        <label 
          className="modal__subtitle"
          htmlFor="time"
        >
          Время
        </label>
        <input
          className="modal__enter"
          type="time"
          name="time"
          id="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          required
        />
      </div>

        <div className="modal__button-wrapper">
          <button 
            className="modal__button modal__close-btn button"
            type="reset"
            onClick={resetTask}
          >
            Отмена
          </button>
          <button 
            className="modal__button modal__add-btn button"
          >
            Сохранить
          </button>
        </div>

      </form>

    </div>
  );
}

export default ModalForm;